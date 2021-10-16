import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Dashboard from '../Screens/Dashboard';
import {APP_NAV} from '../Shared/contants/contants';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={APP_NAV.DASHBOARD}>
        <Stack.Screen name={APP_NAV.LOGIN} component={Login} />
        <Stack.Screen name={APP_NAV.DASHBOARD} component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({});
