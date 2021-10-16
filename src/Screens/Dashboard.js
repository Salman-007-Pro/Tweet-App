import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Header from '../Components/Header/Header';
import PostCard from '../Components/PostCard/PostCard';
import {Metrics, Fonts} from '../Shared/metrics';
import {Colors} from '../Shared/theme';

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

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollWrapper} showsVerticalScrollIndicator={false}>
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

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  scrollWrapper: {
    padding: Metrics.baseMargin,
  },
});
