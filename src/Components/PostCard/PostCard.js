import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fonts, Metrics} from '../../Shared/metrics';
import ImageLoader from '../ImageLoader/ImageLoader';
import Pic1 from '../../assets/images/pic1.jpg';

const PostCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardImageWrapper}>
        <ImageLoader source={Pic1} />
      </View>
      <View></View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
  },
  cardImageWrapper: {
    width: Metrics.scale(40),
    height: Metrics.scale(40),
  },
});
