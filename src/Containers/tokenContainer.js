import {useCallback} from 'react';
import {useQuery} from 'react-query';
import {STORAGE_SERVICE} from '../Shared/contants/contants';
import {reactStorageService} from '../Shared/services/storage.service';
import userService from '../services/user.service';
import {snackbarService} from '../Shared/services/snackbar.service';

const tokenContainer = (
  notifyProps = ['data', 'isLoading'],
  select = data => data,
  queryKey = STORAGE_SERVICE.TOKEN,
  retry = 0,
) => {
  const {data, isLoading} = useQuery(
    queryKey,
    async () => {
      const userJson = await reactStorageService.get(STORAGE_SERVICE.TOKEN);
      const {user_id} = JSON.parse(userJson);
      const {ok, data, response} = await userService.user();
      const currentUser = data?.users?.find(el => el.id === user_id);
      if (userJson && ok) {
        return currentUser;
      } else {
        snackbarService.fail(response.message);
        throw new Error(response.message);
      }
    },
    {
      select: useCallback(select, []),
      notifyOnChangeProps: notifyProps,
      retry: retry,
    },
  );
  return {data: data, isLoading};
};

export default tokenContainer;
