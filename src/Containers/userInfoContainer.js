import {useCallback} from 'react';
import {useQuery} from 'react-query';
import userService from '../services/user.service';
import {STORAGE_SERVICE} from '../Shared/contants/contants';
import {snackbarService} from '../Shared/services/snackbar.service';

const userInfoContainer = (
  notifyProps = ['data', 'isLoading'],
  select = data => data,
  queryKey = STORAGE_SERVICE.USER_INFO,
) => {
  const {data, isLoading} = useQuery(
    queryKey,
    async () => {
      const {ok, data, response} = await userService.user();
      if (ok) {
        return data?.users.reduce((acc, cur) => {
          acc[cur.id] = cur;
          return acc;
        }, {});
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
