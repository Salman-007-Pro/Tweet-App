import React from 'react';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Colors} from '../../Shared/theme';

const ImageLoader = ({source, style, tintColor, ...rest}) => {
  return (
    <FastImage
      source={source}
      style={[styles.Image, style]}
      resizeMode="contain"
      resizeMethod="auto"
      renderToHardwareTextureAndroid
      {...(tintColor && {tintColor: tintColor})}
      {...rest}
    />
  );
};

export default ImageLoader;

const styles = StyleSheet.create({
  Image: {
    width: '100%',
    height: '100%',
  },
});
