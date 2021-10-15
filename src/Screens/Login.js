import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fonts, Metrics} from '../Shared/metrics';
import {Colors} from '../Shared/theme';

const login = () => {
  return (
    <View style={styles.container}>
      <Text>Muhammad Salman Asif</Text>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.APP_PRIMARY,
  },
});
