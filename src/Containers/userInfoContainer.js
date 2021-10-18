import {useCallback} from 'react';
import {useQuery} from 'react-query';
import userService from '../services/user.service';
import {STORAGE_SERVICE} from '../Shared/contants/contants';
import {snackbarService} from '../Shared/services/snackbar.service';

const userInfoContainer = (
  notifyProps = ['data', 'isLoading'],
  select = data => data,
  queryKey = STORAGE_SERVICE.USER_INFO,
  id,
) => {
  const {data, isLoading} = useQuery(
    queryKey,
    async () => {
      const {ok, data, response} = await userService.user(id);
      if (ok) {
        return data;
      } else {
        snackbarService.fail(response.message);
        throw new Error(response.message);
      }
    },
    {
      select: useCallback(select, []),
      notifyOnChangeProps: notifyProps,
    },
  );
  return {data, isLoading};
};

export default userInfoContainer;
