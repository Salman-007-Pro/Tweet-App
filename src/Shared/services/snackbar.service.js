import Snackbar from 'react-native-snackbar';
import {Colors} from '../theme';

function success(message) {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_LONG,
    backgroundColor: Colors.SUCCESS,
  });
}

function fail(message) {
  Snackbar.show({
    text: message || 'Something went wrong',
    duration: Snackbar.LENGTH_LONG,
    backgroundColor: Colors.FAIL,
  });
}

function info(message) {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_SHORT,
  });
}

export const snackbarService = {
  success,
  fail,
  info,
};
