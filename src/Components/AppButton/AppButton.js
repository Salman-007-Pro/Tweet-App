import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Fonts, Metrics} from '../../Shared/metrics';
import {Colors} from '../../Shared/theme';
import Icon from 'react-native-vector-icons/Entypo';

const AppButton = ({
  style,
  textStyle,
  name,
  icon = <Icon name="chevron-right" color={Colors.WHITE} size={Metrics.icons.normal} />,
  isLoading,
  disabled,
  ...rest
}) => {
  return (
    <TouchableOpacity {...rest} style={[styles.container, style]} disabled={isLoading || disabled}>
      {isLoading ? (
        <ActivityIndicator size={Metrics.icons.small} color={Colors.WHITE} />
      ) : (
        <View style={styles.textContainer}>
          {icon}
          {name && <Text style={[styles.buttonText, textStyle]}>{name}</Text>}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.WHITE,
    borderWidth: 1,
    borderRadius: Metrics.verticalScale(18),
    minWidth: '50%',
    minHeight: Metrics.verticalScale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    ...Fonts.font({size: 18, color: Colors.WHITE}),
  },
});
