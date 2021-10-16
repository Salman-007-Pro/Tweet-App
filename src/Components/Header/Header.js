import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import LogoIcon from '../../assets/images/Teewter_Logo.png';
import {Metrics} from '../../Shared/metrics';
import {Colors} from '../../Shared/theme';
import ImageLoader from '../ImageLoader/ImageLoader';

const Header = () => {
  return (
    <View style={styles.container}>
      <ImageLoader source={LogoIcon} tintColor={Colors.APP_PRIMARY} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Metrics.verticalScale(70),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
