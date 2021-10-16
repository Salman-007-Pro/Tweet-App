import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../Components/Header/Header';
import PostCard from '../Components/PostCard/PostCard';
import {Metrics, Fonts} from '../Shared/metrics';
import {Colors} from '../Shared/theme';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Header />
      <PostCard />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderColor: 'red',
    borderWidth: 1,
  },
});
