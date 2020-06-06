import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home/Home';
import Splash from '../pages/Splash/Splash';
import ChatDetails from '../pages/ChatDetails/ChatDetails';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ChatDetails" component={ChatDetails} />
    </Stack.Navigator>
  );
}
