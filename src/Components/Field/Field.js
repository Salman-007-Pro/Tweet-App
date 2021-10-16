import React from 'react';
import {useController} from 'react-hook-form';
import {StyleSheet} from 'react-native';
import InputControl from '../InputControl/InputControl';

const Field = ({
  component: Component = InputControl,
  valuePropName,
  trigger,
  blurTrigger,
  ...rest
}) => {
  const {
    field: {onBlur, onChange, value, ref},
    fieldState: {error, isTouched, invalid},
  } = useController({...rest});

  return (
    <Component
      {...{
        [valuePropName || 'value']: value,
        [trigger || 'onChangeText']: onChange,
        [blurTrigger || 'onBlur']: onBlur,
      }}
      inputRef={ref}
      error={(isTouched || invalid) && error?.message}
      {...rest}
    />
  );
};

export default Field;

const styles = StyleSheet.create({});
