import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconIonic from 'react-native-vector-icons/Ionicons';
import {Fonts, Metrics} from '../../Shared/metrics';
import {Colors} from '../../Shared/theme';
import Input from './Input';

const InputControl = ({
  as: Component = Input,
  leftIcon,
  rightIcon,
  showEye = false,
  error,
  containerStyle,
  wrapperStyle,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(true);

  const showPasswordHandler = () => {
    setShowPassword(prev => !prev);
  };
  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <View style={[styles.container, containerStyle]}>
        {leftIcon && <View style={styles.iconWrapper}>{leftIcon}</View>}

        <Component {...rest} {...(showEye && {secureTextEntry: showPassword})} />
        {showEye && (
          <TouchableOpacity style={styles.iconWrapper} onPress={showPasswordHandler}>
            <IconIonic
              name={!showPassword ? 'eye' : 'eye-off'}
              color={Colors.WHITE}
              size={Metrics.icons.tiny}
            />
          </TouchableOpacity>
        )}
        {rightIcon && <View style={styles.iconWrapper}>{rightIcon}</View>}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : <Text> </Text>}
    </View>
  );
};

export default InputControl;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Metrics.verticalScale(20),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.WHITE,
    borderBottomWidth: 1,
    marginBottom: Metrics.verticalScale(4),
  },
  error: {
    ...Fonts.font({size: 18, color: Colors.ERROR}),
  },
  iconWrapper: {
    paddingHorizontal: Metrics.scale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
