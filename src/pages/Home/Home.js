import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chat from '../Chat/Chat';
import Settings from '../Settings/Settings';
import Feather from 'react-native-vector-icons/Feather';
import Contacts from '../Contacts/Contacts';
import {IconWithBadge} from '../../components/Badge';
import {useSelector, useDispatch} from 'react-redux';
import {isAuthenticated, logout} from '../../../redux/Actions/userActions';

export default function Home({navigation}) {
  const auth = useSelector(state => state.auth);
  const Tab = createBottomTabNavigator();
  const dispatch = useDispatch();

  useEffect(() => {
    // if (!auth.isAuthenticated) {
    //   dispatch(logout());
    //   navigation.navigate('Splash');
    // }

    const subscription = navigation.addListener('focus', () => {
      if (!auth.isAuthenticated) {
        dispatch(logout());
        navigation.navigate('Splash');
      }
    });

    return subscription;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Chat': {
              iconName = focused ? 'message-circle' : 'message-circle';
              // navigation.navigate(route.name);
              size = 26;

              return (
                <IconWithBadge
                  name={iconName}
                  size={size}
                  color={color}
                  badgeCount={1}
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

            default:
              return;
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
