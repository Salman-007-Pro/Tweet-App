import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../Screens/Dashboard';
import CreatePost from '../Screens/CreatePost';
import Profile from '../Screens/Profile';
import CustomizeTabBar from '../Components/CustomizeTabBar/CustomizeTabBar';
import {APP_NAV} from '../Shared/contants/contants';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CreatePostStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false, presentation: 'modal'}}>
    <Stack.Screen name="MyModal" component={CreatePost} />
  </Stack.Navigator>
);
const AppNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={CustomizeTabBar}
      detachInactiveScreens
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={APP_NAV.DASHBOARD} component={Dashboard} />
      <Tab.Screen name={APP_NAV.POST} component={CreatePostStack} />
      <Tab.Screen name={APP_NAV.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
