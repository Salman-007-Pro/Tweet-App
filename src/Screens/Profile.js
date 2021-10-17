import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import HeaderProfile from '../Components/Header/HeaderProfile';
import {Metrics, Fonts} from '../Shared/metrics';
import {Colors} from '../Shared/theme';
import IconEnt from 'react-native-vector-icons/Entypo';
import PostCard from '../Components/PostCard/PostCard';

const Posts = [
  {
    name: 'Mark Samson',
    email: '@MarkSam',
    description:
      " This is the best place to see what's happening in your world. Find some people and topics to follow now.",
    likes: '3k',
  },
  {
    name: 'Mark Samson',
    email: '@MarkSam',
    description:
      " This is the best place to see what's happening in your world. Find some people and topics to follow now.",
    likes: '3k',
  },
  {
    name: 'Mark Samson',
    email: '@MarkSam',
    description:
      " This is the best place to see what's happening in your world. Find some people and topics to follow now.",
    likes: '3k',
  },
  {
    name: 'Mark Samson',
    email: '@MarkSam',
    description:
      " This is the best place to see what's happening in your world. Find some people and topics to follow now.",
    likes: '3k',
  },
  {
    name: 'Mark Samson',
    email: '@MarkSam',
    description:
      " This is the best place to see what's happening in your world. Find some people and topics to follow now.",
    likes: '3k',
  },
  {
    name: 'Mark Samson',
    email: '@MarkSam',
    description:
      " This is the best place to see what's happening in your world. Find some people and topics to follow now.",
    likes: '3k',
  },
  {
    name: 'Mark Samson',
    email: '@MarkSam',
    description:
      " This is the best place to see what's happening in your world. Find some people and topics to follow now.",
    likes: '3k',
  },
  {
    name: 'Mark Samson',
    email: '@MarkSam',
    description:
      " This is the best place to see what's happening in your world. Find some people and topics to follow now.",
    likes: '3k',
  },
];

const Profile = () => {
  return (
    <View style={styles.container}>
      <HeaderProfile />
      <ScrollView contentContainerStyle={styles.scrollWrapper} showsVerticalScrollIndicator={false}>
        <View style={styles.introductionContainer}>
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>Mark Samson</Text>
            <Text style={styles.headingCaption}>@MarkSam</Text>
          </View>
          <Text style={styles.introductionText}>
            This is the best place to see what's happening in your world. Find some people and
            topcis to follow now.
          </Text>
          <View style={styles.locationContainer}>
            <IconEnt name="location-pin" size={Metrics.icons.tiny} color={Colors.GRAY_NORMAL} />
            <Text>London</Text>
          </View>
          <View style={styles.followingContainer}>
            <Text style={[styles.followingText, {marginRight: Metrics.baseMargin}]}>
              578 <Text style={styles.headingCaption}>Following</Text>
            </Text>
            <Text style={styles.followingText}>
              230 <Text style={styles.headingCaption}>Followers</Text>
            </Text>
          </View>
        </View>
        {Posts.map((el, index, {length}) => (
          <PostCard
            key={index}
            {...el}
            {...(index === length - 1 && {style: {borderBottomWidth: 0, marginBottom: 0}})}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  introductionContainer: {
    borderColor: Colors.GREY_COLOR2,
    borderBottomWidth: 1,
    marginBottom: Metrics.baseMargin,
  },
  headingContainer: {
    marginBottom: Metrics.verticalScale(10),
  },
  headingText: {
    ...Fonts.font({size: 28, color: Colors.BLACK, type: Fonts.Type.Bold}),
  },
  headingCaption: {
    ...Fonts.font({size: 18, color: Colors.GRAY_NORMAL}),
  },
  introductionText: {
    ...Fonts.font({size: 18, color: Colors.BLACK}),
    letterSpacing: Metrics.scale(1),
    marginBottom: Metrics.verticalScale(10),
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  followingContainer: {
    paddingVertical: Metrics.baseMargin,
    // borderColor: Colors.GREY_COLOR2,

    flexDirection: 'row',
  },
  followingText: {
    ...Fonts.font({size: 18, color: Colors.BLACK, type: Fonts.Type.Bold}),
  },
  scrollWrapper: {
    padding: Metrics.baseMargin,
    paddingTop: 0,
  },
});
