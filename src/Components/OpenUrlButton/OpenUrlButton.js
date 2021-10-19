import React, {useCallback} from 'react';
import {StyleSheet, Text, Linking, TouchableOpacity} from 'react-native';
import {snackbarService} from '../../Shared/services/snackbar.service';

const OpenURLButton = ({url, children, style}) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      snackbarService.info(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <TouchableOpacity onPress={handlePress} style={style}>
      {children}
    </TouchableOpacity>
  );
};
export default OpenURLButton;

const styles = StyleSheet.create({});
