import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppButton from '../Components/AppButton/AppButton';
import {Fonts, Metrics} from '../Shared/metrics';
import {Colors} from '../Shared/theme';

const CreatePost = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <AppButton
          name="Cancel"
          icon={false}
          textStyle={styles.cancelText}
          style={styles.cancelButton}
        />
        <AppButton name="Post" icon={false} textStyle={styles.postText} style={styles.postButton} />
      </View>
    </View>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
    padding: Metrics.baseMargin,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    width: 'auto',
    minWidth: 0,
    paddingHorizontal: Metrics.verticalScale(20),
  },
  cancelText: {
    color: Colors.APP_PRIMARY,
  },
  postText: {
    color: Colors.WHITE,
  },
  postButton: {
    backgroundColor: Colors.APP_PRIMARY,
    borderWidth: 0,
    width: 'auto',
    minWidth: 0,
    paddingHorizontal: Metrics.verticalScale(20),
    borderRadius: 100,
  },
});
