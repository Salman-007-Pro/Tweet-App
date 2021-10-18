import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {Metrics} from '../../Shared/metrics';
import {Colors} from '../../Shared/theme';

const FullLoader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={Metrics.icons.normal} color={Colors.WHITE} />
    </View>
  );
};

export default FullLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.APP_PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
