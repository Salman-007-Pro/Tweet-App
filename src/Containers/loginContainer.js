import {useMutation} from 'react-query';
import authService from '../services/auth.service';
import {snackbarService} from '../Shared/services/snackbar.service';

const loginContainer = () => {
  const {data, isLoading, mutate, mutateAsync} = useMutation(async payload => {
    const {ok, data, response} = await authService.login(payload);
    if (ok) {
      return data;
    } else {
      snackbarService.fail(response.message);
      throw new Error(response.message);
    }
  });
  return {
    data,
    isLoading,
    mutate,
    mutateAsync,
  };
};

export default loginContainer;
