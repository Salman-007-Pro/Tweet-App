import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {APP_NAV} from '../Shared/contants/contants';
import {Colors} from '../Shared/theme';
import {navigationRef} from '../Shared/services/navigation.service';
import AppNavigator from './AppNavigator';
import Login from '../Screens/Login';
import tokenContainer from '../Containers/tokenContainer';
import FullLoader from '../Components/FullLoader/FullLoader';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.WHITE,
  },
};

const AuthNavigation = () => {
  const {data: {id: token} = {}, isLoading} = tokenContainer();

  if (isLoading) {
    return <FullLoader />;
  }
  return (
    <NavigationContainer theme={MyTheme} ref={navigationRef}>
      {!token ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={APP_NAV.LOGIN} component={Login} />
        </Stack.Navigator>
      ) : (
        <AppNavigator />
      )}
    </NavigationContainer>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({});
