import React, {memo} from 'react';
import {StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';
import Header from '../Components/Header/Header';
import PostCard from '../Components/PostCard/PostCard';
import feedContainer from '../Containers/feedContainer';
import userInfoContainer from '../Containers/userInfoContainer';
import {Metrics, Fonts} from '../Shared/metrics';
import {Colors} from '../Shared/theme';
import {APP_NAV} from '../Shared/contants/contants';

const Dashboard = ({navigation}) => {
  const {data: feedProvider, isLoading: feedLoader} = feedContainer();
  const {data: userProvider, isLoading: userLoader} = userInfoContainer();
  return (
    <View style={styles.container}>
      <Header />
      {userLoader || feedLoader ? (
        <ActivityIndicator size={Metrics.icons.normal} color={Colors.APP_PRIMARY} />
      ) : (
        <FlatList
          data={feedProvider?.feeds}
          keyExtractor={(_, index) => index}
          initialNumToRender={10}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollWrapper}
          ItemSeparatorComponent={() => <View style={styles.itemSeparatorStyle} />}
          ListEmptyComponent={() => (
            <View style={styles.noFeedContainer}>
              <Text style={styles.noFeedText}>No Feeds</Text>
            </View>
          )}
          renderItem={({item, index}) => {
            const {first_name, last_name, profile_picture, username, ...rest} =
              userProvider?.[item.user_id];
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(APP_NAV.USER_PROFILE, {
                    data: {first_name, last_name, profile_picture, username, ...rest},
                  })
                }>
                <PostCard
                  name={`${first_name} ${last_name}`}
                  email={username}
                  image={profile_picture}
                  {...item}
                  {...(!feedProvider?.feeds[index + 1] && {
                    style: {borderBottomWidth: 0, marginBottom: 0},
                  })}
                />
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  scrollWrapper: {
    padding: Metrics.baseMargin,
  },
  itemSeparatorStyle: {
    marginBottom: Metrics.verticalScale(30),
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
