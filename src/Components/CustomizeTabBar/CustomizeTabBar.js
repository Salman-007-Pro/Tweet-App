import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {APP_NAV, STORAGE_SERVICE} from '../../Shared/contants/contants';
import {Metrics} from '../../Shared/metrics';
import Icon from 'react-native-vector-icons/Entypo';
import {Colors} from '../../Shared/theme';
import ImageLoader from '../ImageLoader/ImageLoader';
import LogoIcon from '../../assets/images/Teewter_Logo.png';
import {useQueryClient} from 'react-query';

const ListMap = route => {
  switch (route) {
    case APP_NAV.DASHBOARD:
      return ({isFocused, onPress}) => (
        <View style={[styles.buttonWrapper, {alignItems: 'flex-start'}]}>
          <TouchableOpacity onPress={onPress}>
            <Icon
              name="home"
              size={Metrics.icons.normal}
              color={isFocused ? Colors.APP_PRIMARY : Colors.GRAY_NORMAL}
            />
          </TouchableOpacity>
        </View>
      );
    case APP_NAV.POST:
      return ({isFocused, onPress}) => (
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={onPress} style={styles.midButtonContainer}>
            <View style={styles.imageContainer}>
              <ImageLoader source={LogoIcon} resizeMode="contain" />
            </View>
          </TouchableOpacity>
        </View>
      );
    default:
      return ({isFocused, onPress}) => {
        const client = useQueryClient();
        const currentUser = client.getQueryData(STORAGE_SERVICE.TOKEN);

        return (
          <View style={[styles.buttonWrapper, {alignItems: 'flex-end'}]}>
            <TouchableOpacity
              onPress={onPress}
              style={[
                styles.profileWrapper,
                {...(isFocused && {borderColor: Colors.APP_PRIMARY})},
              ]}>
              <View style={styles.profileContainer}>
                <ImageLoader
                  source={{uri: currentUser?.profile_picture}}
                  resizeMode="cover"
                  style={{backgroundColor: Colors.APP_PRIMARY}}
                />
              </View>
            </TouchableOpacity>
          </View>
        );
      };
  }
};

const CustomizeTabBar = ({state, navigation}, image) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };
        const Component = ListMap(route.name);
        return <Component key={route.key} isFocused={isFocused} onPress={onPress} />;
      })}
    </View>
  );
};

export default CustomizeTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Metrics.verticalScale(10),
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  midButtonContainer: {
    borderColor: Colors.APP_PRIMARY,
    borderWidth: 1,
    padding: Metrics.scale(1),
    borderRadius: Metrics.scale(20),
    overflow: 'hidden',
  },
  imageContainer: {
    backgroundColor: Colors.APP_PRIMARY,
    width: Metrics.scale(60),
    height: Metrics.scale(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrics.scale(20),
  },
  profileContainer: {
    width: Metrics.scale(45),
    height: Metrics.scale(45),
    borderRadius: Metrics.scale(50),
    overflow: 'hidden',
  },
  profileWrapper: {
    borderRadius: Metrics.scale(50),
    borderColor: 'transparent',
    borderWidth: 1,
    padding: Metrics.scale(1),
  },
});
