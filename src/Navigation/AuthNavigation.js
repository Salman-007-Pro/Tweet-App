import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {APP_NAV} from '../Shared/contants/contants';
import Login from '../Screens/Login';
import Dashboard from '../Screens/Dashboard';
import CreatePost from '../Screens/CreatePost';
import Profile from '../Screens/Profile';
import {Colors} from '../Shared/theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomizeTabBar from '../Components/CustomizeTabBar/CustomizeTabBar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.WHITE,
  },
};

const AuthNavigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator screenOptions={{headerShown: false}} tabBar={CustomizeTabBar}>
        {/* <Tab.Screen name={APP_NAV.LOGIN} component={Login} /> */}
        <Tab.Screen name={APP_NAV.DASHBOARD} component={Dashboard} />
        <Tab.Screen name={APP_NAV.POST} component={CreatePost} />
        <Tab.Screen name={APP_NAV.PROFILE} component={Profile} />
      </Tab.Navigator>
      {/* <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={APP_NAV.POST}>
        <Stack.Screen name={APP_NAV.LOGIN} component={Login} />
        <Stack.Screen name={APP_NAV.DASHBOARD} component={Dashboard} />
        <Stack.Screen name={APP_NAV.POST} component={CreatePost} />
        <Stack.Screen name={APP_NAV.PROFILE} component={Profile} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({});
