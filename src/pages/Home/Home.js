import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chat from '../Chat/Chat';
import Settings from '../Settings/Settings';
import Feather from 'react-native-vector-icons/Feather';
import Contacts from '../Contacts/Contacts';
import {IconWithBadge} from '../../components/Badge';
import {useSelector, useDispatch} from 'react-redux';
import Feeds from '../Feeds/Feeds';
import Notifications from '../Notifications/Notifications';
import {StackActions} from '@react-navigation/native';

export default function Home({navigation}) {
  const auth = useSelector(state => state.auth.isAuthenticated);
  const Tab = createBottomTabNavigator();
  const dispatch = useDispatch();

  useEffect(() => {
    const subscription = navigation.addListener('focus', () => {
      !auth && navigation.dispatch(StackActions.replace('Splash'));
    });
    return subscription;
  }, [dispatch, navigation, auth]);

  return (
    <Tab.Navigator
      initialRouteName="Feeds"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Feeds': {
              iconName = focused ? 'activity' : 'activity';
              size = 26;

              return (
                <IconWithBadge
                  name={iconName}
                  size={size}
                  color={color}
                  badgeCount={1}
                  isFeeds={true}
                />
              );
            }

            case 'Notifications': {
              iconName = focused ? 'bell' : 'bell';
              size = 26;

              return (
                <IconWithBadge
                  name={iconName}
                  size={size}
                  color={color}
                  badgeCount={1}
                  isFeeds={true}
                />
              );
            }
            case 'Chat': {
              iconName = focused ? 'message-circle' : 'message-circle';
              size = 26;

              return (
                <IconWithBadge
                  name={iconName}
                  size={size}
                  color={color}
                  badgeCount={1}
                  isFeeds={true}
                />
              );
            }
            case 'Settings': {
              iconName = focused ? 'settings' : 'settings';
              size = 26;
              return <Feather name={iconName} size={size} color={color} />;
            }

            case 'Contacts': {
              iconName = focused ? 'users' : 'users';
              size = 26;
              return <Feather name={iconName} size={size} color={color} />;
            }

            default:
              return;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#1e2c65',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}>
      <Tab.Screen
        name="Feeds"
        component={Feeds}
        options={({route}) => ({
          title: route.name,
          gestureEnabled: true,
        })}
      />
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
        name="Notifications"
        component={Notifications}
        options={({route}) => ({
          title: route.name,
          gestureEnabled: true,
        })}
      />
    </Tab.Navigator>
  );
}
