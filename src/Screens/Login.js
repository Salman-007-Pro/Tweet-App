import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Fonts, Metrics} from '../Shared/metrics';
import {Colors} from '../Shared/theme';
import LogoIcon from '../assets/images/Teewter_Logo.png';
import * as Yup from 'yup';
import {ERROR_MESSAGES, REGEX_CONSTANT, STORAGE_SERVICE} from '../Shared/contants/contants';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import Field from '../Components/Field/Field';
import AppButton from '../Components/AppButton/AppButton';
import KeyboardVoidViewHOC from '../Components/KeyboardVoidViewHOC/KeyboardVoidViewHOC';
import loginContainer from '../Containers/loginContainer';
import {reactStorageService} from '../Shared/services/storage.service';
import {useQueryClient} from 'react-query';

const schema = Yup.object({
  id: Yup.string()
    .required(ERROR_MESSAGES.REQUIRED_EMAIL)
    .matches(REGEX_CONSTANT.EMAIL_PATTERN, ERROR_MESSAGES.INVALID_EMAIL),
  password: Yup.string()
    .required(ERROR_MESSAGES.REQUIRED_PASSWORD)
    .matches(REGEX_CONSTANT.PASSWORD_PATTERN, ERROR_MESSAGES.INVALID_PASSWORD),
}).required();

const Login = () => {
  const client = useQueryClient();
  const {control, handleSubmit, reset} = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const {isLoading, mutate} = loginContainer();

  const onSubmitHandle = payload => {
    mutate(payload, {
      onSuccess: async data => {
        await reactStorageService.set(STORAGE_SERVICE.TOKEN, JSON.stringify(data));
        client.refetchQueries(STORAGE_SERVICE.TOKEN);
        reset();
      },
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.imageContainer}>
          <Image source={LogoIcon} style={styles.image} resizeMode="contain" resizeMethod="scale" />
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Log In</Text>
        </View>
        <View style={styles.formContainer}>
          <Field control={control} name="id" placeholder="Email" />
          <Field control={control} name="password" placeholder="Password" showEye />
        </View>
        <AppButton
          onPress={handleSubmit(onSubmitHandle)}
          isLoading={isLoading}
          disabled={isLoading}
        />
      </ScrollView>
    </View>
  );
};

export default KeyboardVoidViewHOC(Login);
// export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.APP_PRIMARY,
  },
  scrollViewContainer: {
    flexGrow: 1,
    padding: Metrics.baseMargin,
    alignItems: 'center',
  },
  imageContainer: {
    width: Metrics.scale(60),
    height: Metrics.scale(60),
    marginBottom: Metrics.verticalScale(60),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  headingContainer: {
    marginBottom: Metrics.verticalScale(50),
  },
  heading: {
    ...Fonts.font({size: 40, color: Colors.WHITE}),
    letterSpacing: 2,
  },
  formContainer: {
    width: '95%',
    marginBottom: Metrics.verticalScale(100),
  },
});
