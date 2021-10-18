import {useCallback} from 'react';
import {useQuery} from 'react-query';
import userService from '../services/user.service';
import {STORAGE_SERVICE} from '../Shared/contants/contants';
import {snackbarService} from '../Shared/services/snackbar.service';
import {reactStorageService} from '../Shared/services/storage.service';

const userInfoContainer = (
  notifyProps = ['data', 'isLoading'],
  select = data => data,
  queryKey = STORAGE_SERVICE.USER_INFO,
  id,
) => {
  const {data, isLoading} = useQuery(
    queryKey,
    async () => {
      const {ok, data, response} = await userService.user();
      if (ok) {
        const userInfo = await reactStorageService.get(STORAGE_SERVICE.TOKEN);
        const {user_id} = JSON.parse(userInfo);
        const customizeData = data?.users.reduce((acc, cur) => {
          acc[cur.id] = cur;
          return acc;
        }, {});
        return {
          allUsers: customizeData,
          currentUser: customizeData[user_id],
        };
      } else {
        snackbarService.fail(response.message);
        throw new Error(response.message);
      }
    },
    {
      select: useCallback(select, []),
      notifyOnChangeProps: notifyProps,
      staleTime: Infinity,
    },
  );
  return {data, isLoading};
};

export default userInfoContainer;
