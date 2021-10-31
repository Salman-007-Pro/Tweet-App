import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../Screens/Dashboard';
import CreatePost from '../Screens/CreatePost';
import Profile from '../Screens/Profile';
import CustomizeTabBar from '../Components/CustomizeTabBar/CustomizeTabBar';
import {APP_NAV, STORAGE_SERVICE} from '../Shared/contants/contants';
import {Colors} from '../Shared/theme';
import {useQueryClient} from 'react-query';

const RootStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CreatePlaceholder = () => <View style={{flex: 1, backgroundColor: Colors.APP_PRIMARY}} />;

const AppTabScreen = () => {
  const client = useQueryClient();
  const data = client.getQueryData(STORAGE_SERVICE.TOKEN);
  return (
    <Tab.Navigator
      tabBar={CustomizeTabBar}
      detachInactiveScreens
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={APP_NAV.DASHBOARD} component={Dashboard} />
      <Tab.Screen
        name={APP_NAV.POST}
        component={CreatePlaceholder}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate(APP_NAV.CREATE_MODAL);
          },
        })}
      />
      <Tab.Screen name={APP_NAV.PROFILE} component={Profile} initialParams={{data: data}} />
    </Tab.Navigator>
  );
};
const AppNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={APP_NAV.APP_TAB}>
      <RootStack.Group>
        <RootStack.Screen name={APP_NAV.APP_TAB} component={AppTabScreen} />
      </RootStack.Group>
      <RootStack.Group
        screenOptions={{
          presentation: 'fullScreenModal',
        }}>
        <RootStack.Screen name={APP_NAV.CREATE_MODAL} component={CreatePost} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
