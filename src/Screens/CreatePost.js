import React, {useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppButton from '../Components/AppButton/AppButton';
import {Fonts, Metrics} from '../Shared/metrics';
import {Colors} from '../Shared/theme';
import ImageLoader from '../Components/ImageLoader/ImageLoader';
import Pic1 from '../assets/images/pic2.jpg';
import {useForm} from 'react-hook-form';
import Field from '../Components/Field/Field';
import {ERROR_MESSAGES} from '../Shared/contants/contants';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import KeyboardVoidViewHOC from '../Components/KeyboardVoidViewHOC/KeyboardVoidViewHOC';

const schema = Yup.object({
  post: Yup.string().required(ERROR_MESSAGES.REQUIRED_POST),
}).required();

const CreatePost = () => {
  const {control, handleSubmit} = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
  });
  const onSubmitHandle = data => {
    console.log(data);
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <AppButton
          name="Cancel"
          icon={false}
          textStyle={styles.cancelText}
          style={styles.cancelButton}
        />
        <AppButton
          name="Post"
          icon={false}
          textStyle={styles.postText}
          style={styles.postButton}
          onPress={handleSubmit(onSubmitHandle)}
        />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.bodyImageContainer}>
          <ImageLoader source={Pic1} resizeMode="cover" />
        </View>
        <View style={styles.bodyTextContainer}>
          <Field
            control={control}
            name="post"
            placeholder="What's Happening?"
            containerStyle={styles.bodyTextContainerStyle}
            style={styles.bodyText}
            maxLength={250}
            multiline
            numberOfLines={10}
            selectionColor={Colors.GRAY_NORMAL}
            placeholderTextColor={Colors.GRAY_NORMAL}
          />
        </View>
      </View>
    </View>
  );
};

export default KeyboardVoidViewHOC(CreatePost);

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  bodyContainer: {
    flexDirection: 'row',
    marginTop: Metrics.verticalScale(15),
    flex: 1,
  },
  bodyImageContainer: {
    width: Metrics.scale(55),
    height: Metrics.scale(55),
    overflow: 'hidden',
    borderRadius: 100,
  },
  bodyTextContainer: {
    flex: 1,
    width: '100%',
    marginLeft: Metrics.verticalScale(20),
  },
  bodyTextContainerStyle: {
    borderBottomWidth: 0,
    alignItems: 'flex-start',
    height: '80%',
  },
  bodyText: {
    height: '100%',
    textAlignVertical: 'top',
    ...Fonts.font({size: 18, color: Colors.BLACK}),
  },
});
