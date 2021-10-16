import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Fonts, Metrics} from '../../Shared/metrics';
import {Colors} from '../../Shared/theme';

const Input = ({
  secureTextEntry = false,
  placeholderTextColor = Colors.GREY_COLOR5,
  selectionColor = Colors.WHITE,
  inputRef,
  style,
  ...rest
}) => {
  return (
    <TextInput
      {...rest}
      ref={inputRef}
      style={[styles.inputStyle, style]}
      secureTextEntry={secureTextEntry}
      caretHidden={false}
      selectionColor={selectionColor}
      placeholderTextColor={placeholderTextColor}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
    padding: Metrics.scale(10),
    ...Fonts.font({size: 18, color: Colors.WHITE}),
    height: Metrics.verticalScale(60),
  },
});
