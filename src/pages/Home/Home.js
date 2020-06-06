import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chat from '../Chat/Chat';
import Settings from '../Settings/Settings';
import Feather from 'react-native-vector-icons/Feather';
import Contacts from '../Contacts/Contacts';
import {IconWithBadge} from '../../components/Badge';

export default function Home({navigation}) {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Chat': {
              iconName = focused ? 'message-circle' : 'message-circle';
              size = 26;
              return (
                <IconWithBadge
                  name={iconName}
                  size={size}
                  color={color}
                  badgeCount={0}
                />
              );
            }
            case 'Settings': {
              iconName = focused ? 'settings' : 'settings';
              size = 26;
              <IconWithBadge name={iconName} size={size} color={color} />;
              return <Feather name={iconName} size={size} color={color} />;
            }

            case 'Contacts': {
              iconName = focused ? 'users' : 'users';
              size = 26;
              return <Feather name={iconName} size={size} color={color} />;
            }
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}>
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={({route}) => ({
          title: route.name,
          gestureEnabled: true,
        })}
      />
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={({route}) => ({
          title: route.name,
          gestureEnabled: true,
        })}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={({route}) => ({
          title: route.name,
          gestureEnabled: true,
        })}
      />
    </Tab.Navigator>
  );
}
