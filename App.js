import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {QueryClient, QueryClientProvider} from 'react-query';
import AuthNavigation from './src/Navigation/AuthNavigation';
import {Colors} from './src/Shared/theme';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    if (__DEV__) {
      import('react-query-native-devtools').then(({addPlugin}) => {
        addPlugin({queryClient});
      });
    }
    SplashScreen.hide();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeAreaStyle}>
          <AuthNavigation />
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
