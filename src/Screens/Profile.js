import React from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import HeaderProfile from '../Components/Header/HeaderProfile';
import {Metrics, Fonts} from '../Shared/metrics';
import {Colors} from '../Shared/theme';
import IconEnt from 'react-native-vector-icons/Entypo';
import PostCard from '../Components/PostCard/PostCard';
import feedContainer from '../Containers/feedContainer';
import {STORAGE_SERVICE} from '../Shared/contants/contants';
import {useQueryClient} from 'react-query';

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

const Profile = ({navigation}) => {
  const client = useQueryClient();
  const {
    first_name,
    last_name,
    followers,
    following,
    location,
    short_bio,
    username: email,
    profile_picture,
    id,
    ...rest
  } = client.getQueryData(STORAGE_SERVICE.TOKEN);
  const {data: feedProvider} = feedContainer();
  const currentUserFeeds = feedProvider?.feeds?.filter(el => el.user_id == id);
  return (
    <View style={styles.container}>
      <HeaderProfile onBack={navigation.goBack} image={profile_picture} {...rest} />
      <FlatList
        data={currentUserFeeds}
        keyExtractor={(_, index) => index}
        initialNumToRender={10}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollWrapper}
        ItemSeparatorComponent={() => <View style={styles.itemSeparatorStyle} />}
        ListHeaderComponent={() => (
          <View style={styles.introductionContainer}>
            <View style={styles.headingContainer}>
              <Text style={styles.headingText}>{`${first_name} ${last_name}`}</Text>
              <Text style={styles.headingCaption}>{email}</Text>
            </View>
            <Text style={styles.introductionText}>{short_bio}</Text>
            <View style={styles.locationContainer}>
              <IconEnt name="location-pin" size={Metrics.icons.tiny} color={Colors.GRAY_NORMAL} />
              <Text>{location}</Text>
            </View>
            <View style={styles.followingContainer}>
              <Text style={[styles.followingText, {marginRight: Metrics.baseMargin}]}>
                {following} <Text style={styles.headingCaption}>Following</Text>
              </Text>
              <Text style={styles.followingText}>
                {followers} <Text style={styles.headingCaption}>Followers</Text>
              </Text>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.noFeedContainer}>
            <Text style={styles.noFeedText}>No Feeds</Text>
          </View>
        )}
        renderItem={({item, index}) => {
          return (
            <PostCard
              name={`${first_name} ${last_name}`}
              email={email}
              image={profile_picture}
              {...item}
              {...(!currentUserFeeds[index + 1] && {
                style: {borderBottomWidth: 0, marginBottom: 0},
              })}
            />
          );
        }}
      />
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
  noFeedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  noFeedText: {
    ...Fonts.font({size: 20, type: Fonts.Type.Bold}),
    opacity: 0.5,
  },
});
