import AsyncStorage from '@react-native-async-storage/async-storage';
import {snackbarService} from './snackbar.service';

export const reactStorageService = {
  set,
  get,
  clear,
  remove,
  multiSet,
};
async function set(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    snackbarService.fail(error?.message);
  }
}

async function multiSet(values) {
  try {
    await AsyncStorage.multiSet(values);
  } catch (error) {
    snackbarService.fail(error?.message);
  }
}

async function get(key) {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    snackbarService.fail(error?.message);
  }
}

async function clear() {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    snackbarService.fail(error?.message);
  }
}

async function remove(key) {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (error) {
    snackbarService.fail(error?.message);
  }
}
