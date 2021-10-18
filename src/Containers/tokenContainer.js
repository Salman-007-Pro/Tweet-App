import {useCallback} from 'react';
import {useQuery} from 'react-query';
import {STORAGE_SERVICE} from '../Shared/contants/contants';
import {reactStorageService} from '../Shared/services/storage.service';

const tokenContainer = (
  notifyProps = ['data', 'isLoading'],
  select = data => data,
  queryKey = STORAGE_SERVICE.TOKEN,
  retry = 0,
) => {
  const {data, isLoading} = useQuery(
    queryKey,
    async () => {
      const userInfo = await reactStorageService.get(STORAGE_SERVICE.TOKEN);
      if (userInfo) {
        return JSON.parse(userInfo);
      } else {
        return {
          id: null,
        };
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
