import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Fonts, Metrics} from '../../Shared/metrics';
import ImageLoader from '../ImageLoader/ImageLoader';
import Pic1 from '../../assets/images/pic1.jpg';
import {Colors} from '../../Shared/theme';
import Icon from 'react-native-vector-icons/AntDesign';
import IconOct from 'react-native-vector-icons/Octicons';

const PostCard = ({name, email, description, style, image = Pic1, likes}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.cardImageWrapper}>
        <ImageLoader source={image} resizeMode="cover" />
      </View>
      <View style={styles.cardBodyContainer}>
        <Text style={styles.cardHeadingText}>
          {name}
          <Text style={styles.cardHeadingTextEmail}> {email}</Text>
        </Text>
        <Text style={styles.cardBodyText}>{description}</Text>
        <View style={styles.cardBodyBottomContainer}>
          <TouchableOpacity style={styles.cardHeartContainer}>
            <Icon name="heart" color={Colors.HEART_COLOR} size={Metrics.icons.normal} />
            <Text style={styles.cardHeadingTextEmail}> {likes}</Text>
          </TouchableOpacity>
          <IconOct name="link-external" color={Colors.GRAY_LIGHT} size={Metrics.icons.normal} />
        </View>
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: Colors.GREY_COLOR2,
    borderBottomWidth: 1,
    marginBottom: Metrics.verticalScale(30),
  },
  cardImageWrapper: {
    width: Metrics.scale(55),
    height: Metrics.scale(55),
    overflow: 'hidden',
    borderRadius: 100,
  },
  cardBodyContainer: {
    width: '100%',
    flex: 1,
    marginLeft: Metrics.scale(10),
  },
  cardHeadingText: {
    ...Fonts.font({size: 18, color: Colors.BLACK, type: Fonts.Type.Bold}),
    marginBottom: Metrics.verticalScale(5),
  },
  cardHeadingTextEmail: {
    ...Fonts.font({size: 18, color: Colors.GRAY_LIGHT, type: Fonts.Type.Light}),
  },
  cardBodyText: {
    ...Fonts.font({size: 18, color: Colors.BLACK}),
    textAlign: 'justify',
  },
  cardBodyBottomContainer: {
    paddingVertical: Metrics.baseMargin,
    flexDirection: 'row',
  },
  cardHeartContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '45%',
  },
});
