import {useCallback} from 'react';
import {useQuery} from 'react-query';
import feedService from '../services/feed.service';
import {STORAGE_SERVICE} from '../Shared/contants/contants';
import {snackbarService} from '../Shared/services/snackbar.service';

const feedContainer = (
  notifyProps = ['data', 'isLoading'],
  select = data => data,
  queryKey = STORAGE_SERVICE.FEED,
) => {
  const {data, isLoading} = useQuery(
    queryKey,
    async () => {
      const {ok, data, response} = await feedService.feed();
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
      staleTime: Infinity,
    },
  );
  return {data, isLoading};
};

export default feedContainer;
