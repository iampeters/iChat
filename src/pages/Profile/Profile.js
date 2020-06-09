import React, {useEffect} from 'react';
import {
  Container,
  Text,
  Header,
  Button,
  Left,
  Title,
  Content,
} from 'native-base';
import styles from './Profile.Styles';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../../../redux/Actions/userActions';
import {StackActions} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import {Alert, BackHandler} from 'react-native';

export default function Profile({navigation, route}) {
  const auth = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    const subscription = navigation.addListener('focus', () => {
      !auth && navigation.dispatch(StackActions.replace('Splash'));
    });
    return subscription;
  }, [auth, navigation]);

  const logOut = () => {
    dispatch(logout());
    BackHandler.exitApp();
  };

  const confirmExit = () => {
    Alert.alert(
      'Logout',
      'Are you sure?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Yes', onPress: logOut},
      ],
      {cancelable: true},
    );
    return true;
  };

  return (
    <Container>
      {/* header */}
      <Header style={styles.header}>
        <Left>
          <Button transparent onPress={confirmExit}>
            <Feather name="power" size={25} style={styles.logout} />
            <Title style={styles.logout}>Logout</Title>
          </Button>
        </Left>
      </Header>
      <Content>
        <Text>Profile</Text>
      </Content>
    </Container>
  );
}
