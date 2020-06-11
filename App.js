/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import StackNavigator from './src/components/Navigator';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {isAuthenticated} from './redux/Actions/userActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isAuthenticated());
  });

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" showHideTransition="slide" />
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
