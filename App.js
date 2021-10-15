import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Colors} from './src/Shared/theme';
import Login from './src/Screens/Login';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    if (__DEV__) {
      import('react-query-native-devtools').then(({addPlugin}) => {
        addPlugin({queryClient});
      });
    }
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeAreaStyle}>
          <Login />
        </SafeAreaView>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
});
