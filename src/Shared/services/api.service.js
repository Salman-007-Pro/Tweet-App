import {create} from 'apisauce';
import {reactStorageService} from './storage.service';
import {snackbarService} from './snackbar.service';
import utilService from './util.service';
import NavigationHelper from './navigationHelper.service';
import {API_SERVICE, STORAGE_SERVICE, CONTENT_TYPE, HTTP_STATUS} from '../contants/contants';

const apiSauceInstance = create({
  baseURL: API_SERVICE.BASE_URL,
});

async function get(url, queryParams, config) {
  const response = await apiSauceInstance.get(url, queryParams, config);
  return handleResponse(response);
}

async function post(url, data, config) {
  const response = await apiSauceInstance.post(url, data, config);
  console.log({response});
  return handleResponse(response);
}

async function put(url, data, config) {
  const response = await apiSauceInstance.put(url, data, config);
  return handleResponse(response);
}

async function patch(url, data, config) {
  const response = await apiSauceInstance.patch(url, data, config);
  return handleResponse(response);
}

async function deleteRequest(url, queryParams, config) {
  const response = await apiSauceInstance.delete(url, queryParams, config);
  return handleResponse(response);
}

function handleResponse(response) {
  const mutatedResponse = {
    ok: response.ok,
    status: response.status,
    response: {
      code: utilService.getValue(response.data, 'response.code', 500),
      message:
        response?.data instanceof ArrayBuffer
          ? ''
          : utilService.getValue(
              response.data,
              'response.message',
              response.ok ? '' : 'Something went wrong',
            ),
      errorCode: utilService.getValue(response.data, 'response.errorCode', 400),
    },
  };
  const data = utilService.getValue(response.data, 'data', response.data);
  if (response.status === HTTP_STATUS.UNAUTHORIZED) {
    snackbarService.fail('You are not authorized to perform this action');
    NavigationHelper.logout();
    return {...mutatedResponse, data: !utilService.isEmpty(data) ? data : null};
  }
  if (response.status === HTTP_STATUS.SERVER_ERROR) {
    snackbarService.fail('Something went wrong');
    // reactStorageService.clear();
    return {...mutatedResponse, data: !utilService.isEmpty(data) ? data : null};
  }
  if (response.ok) {
    return {...mutatedResponse, data};
  } else {
    return {...mutatedResponse, data: !utilService.isEmpty(data) ? data : null};
  }
}
apiSauceInstance.addAsyncRequestTransform(async request => {
  const token = await reactStorageService.get(STORAGE_SERVICE.TOKEN);
  request.headers['Authorization'] = `Bearer ${token}`;
  request.headers['Content-Type'] = CONTENT_TYPE.JSON;
});

export default {
  get: get,
  post: post,
  patch: patch,
  put: put,
  delete: deleteRequest,
};

// Response:{
//   ok: Boolean,
//   status: Number,
//   data: Object | null,
//   response : Object
// }

// Example
// Response:{
//   ok: true,
//   status: 200,
//   data: {accessToken:0000},
//   response : {
//     code: 200,
//     errorCode: 6001
//     message: "Success"
//   }
// }
