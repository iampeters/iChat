import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home/Home';
import Splash from '../pages/Splash/Splash';
import ChatDetails from '../pages/ChatDetails/ChatDetails';
import Signin from '../pages/Signin/Signin';
import Signup from '../pages/Signup/Signup';
import SplashScreen from '../pages/splashScreen/SplashScreen';
import Profile from '../pages/Profile/Profile';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="SplashScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        transitionSpec: {
          open: config,
          close: config,
        },
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ChatDetails" component={ChatDetails} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
