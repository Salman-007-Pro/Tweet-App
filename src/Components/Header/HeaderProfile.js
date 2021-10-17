import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Fonts, Metrics} from '../../Shared/metrics';
import {Colors} from '../../Shared/theme';
import Icon from 'react-native-vector-icons/Feather';
import IconEnt from 'react-native-vector-icons/Entypo';
import ImageLoader from '../ImageLoader/ImageLoader';
import Pic1 from '../../assets/images/pic1.jpg';

const HeaderProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerTopContainer}>
        <TouchableOpacity>
          <Icon name="chevron-left" size={Metrics.icons.normal} color={Colors.WHITE} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerFooterContainer}>
          <IconEnt name="info-with-circle" size={Metrics.icons.normal} color={Colors.WHITE} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <ImageLoader source={Pic1} resizeMode="cover" />
      </View>
    </View>
  );
};

export default HeaderProfile;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.APP_PRIMARY,
    // padding: Metrics.baseMargin,
    // borderColor: 'red',
    // borderWidth: 1,
  },
  headerTopContainer: {
    height: Metrics.verticalScale(130),
    justifyContent: 'space-between',
    backgroundColor: Colors.APP_PRIMARY,
    padding: Metrics.baseMargin,
  },
  headerFooterContainer: {
    alignSelf: 'flex-end',
  },
  imageContainer: {
    width: Metrics.scale(90),
    height: Metrics.scale(90),
    borderRadius: 100,
    overflow: 'hidden',
    borderColor: Colors.WHITE,
    borderWidth: 3,
    marginTop: Metrics.scale(-45),
    margin: Metrics.baseMargin,
  },
});
