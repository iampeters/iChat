import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chat from '../Chat/Chat';
import Feather from 'react-native-vector-icons/Feather';
import Contacts from '../Contacts/Contacts';
import {IconWithBadge} from '../../components/Badge';
import {useSelector, useDispatch} from 'react-redux';
import Feeds from '../Feeds/Feeds';
import Notifications from '../Notifications/Notifications';
import {StackActions} from '@react-navigation/native';

export default function Home({navigation}) {
  const auth = useSelector(state => state.auth);
  const chats = useSelector(state => state.activeChats);
  const userDetails = useSelector(state => state.user);
  const [newChat, setNewChat] = useState(0);
  const Tab = createBottomTabNavigator();
  const dispatch = useDispatch();

  /*
   this function will get active chats
   filter out user responses
  */
  const newChatCount = () => {
    const counts = chats.filter(
      item => item.sender !== userDetails.username && !item.read,
    );
    setNewChat(counts.length);
  };

  useEffect(() => {
    newChatCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chats]);

  useEffect(() => {
    const subscription = navigation.addListener('focus', () => {
      !auth.isAuthenticated &&
        navigation.dispatch(StackActions.replace('Splash'));
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
                  isFeeds={false}
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
                  badgeCount={newChat}
                  isFeeds={false}
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
