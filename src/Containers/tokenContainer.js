import {useCallback} from 'react';
import {useQuery} from 'react-query';
import {STORAGE_SERVICE} from '../Shared/contants/contants';
import {snackbarService} from '../Shared/services/snackbar.service';
import {reactStorageService} from '../Shared/services/storage.service';

const tokenContainer = (
  notifyProps = ['data', 'isLoading'],
  select = data => data,
  queryKey = STORAGE_SERVICE.TOKEN,
) => {
  const {data, isLoading} = useQuery(
    queryKey,
    async () => {
      const userInfo = await reactStorageService.get(STORAGE_SERVICE.USER_INFO);
      if (userInfo) {
        return userInfo;
      } else {
        snackbarService.fail('Something went wrong');
        throw new Error('Something went wrong');
      }
    },
    {
      select: useCallback(select, []),
      notifyOnChangeProps: notifyProps,
    },
  );
  return {data, isLoading};
};

export default tokenContainer;
