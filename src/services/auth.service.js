import apiService from '../Shared/services/api.service';

const login = async ({id, password}) => {
  const {data, ...rest} = await apiService.get(
    '/v1633980023/cdn/teewt_api/user_login_data_lyukus.json',
  );
  const userInfo = data?.oauth?.find(el => el.user_id === id && el.password === password);
  if (!userInfo)
    return {
      ok: false,
      data: null,
      response: {
        message: 'user not found',
      },
    };
  return {
    data: userInfo,
    ...rest,
  };
};

export default authService = {
  login: login,
};
