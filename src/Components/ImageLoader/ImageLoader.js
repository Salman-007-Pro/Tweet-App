import React, {useState} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Metrics} from '../../Shared/metrics';
import {Colors} from '../../Shared/theme';

const ImageLoader = ({
  source,
  containerStyle,
  style,
  tintColor,
  resizeMode = 'contain',
  size = Metrics.icons.tiny,
  ...rest
}) => {
  const [loading, setLoading] = useState(true);

  const onLoadStart = () => setLoading(true);
  const onLoadEnd = () => setLoading(false);

  return (
    <View style={[styles.imageContainer, containerStyle]}>
      <FastImage
        source={source}
        style={[styles.Image, style]}
        resizeMode={resizeMode}
        resizeMethod="auto"
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
        renderToHardwareTextureAndroid
        {...(tintColor && {tintColor: tintColor})}
        {...rest}
      />
      {loading && <ActivityIndicator size={size} color={Colors.WHITE} style={styles.loading} />}
    </View>
  );
};

export default ImageLoader;

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  Image: {
    width: '100%',
    height: '100%',
  },
  loading: {
    position: 'absolute',
  },
});
