import React from 'react';
import {StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import {Colors} from '../../Shared/theme';

const KeyboardVoidViewHOC =
  (WrapperComponent, ...rest) =>
  props => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        enableOnAndroid
        enableAutomaticScroll>
        <WrapperComponent {...rest} {...props} />
      </KeyboardAwareScrollView>
    );
  };

export default KeyboardVoidViewHOC;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: Colors.WHITE,
  },
});
