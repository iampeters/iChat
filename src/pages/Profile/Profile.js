import React, {useEffect} from 'react';
import {
  Container,
  Text,
  Header,
  Button,
  Left,
  Title,
  Content,
  Right,
  Icon,
} from 'native-base';
import styles from './Profile.Styles';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../../../redux/Actions/userActions';
import {StackActions} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import {Alert, BackHandler} from 'react-native';
import globalStyles from '../../../Styles';

export default function Profile({navigation, route}) {
  const auth = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    !auth && navigation.dispatch(StackActions.replace('Splash'));
  }, [auth, navigation]);

  const logOut = () => {
    dispatch(logout());
    // BackHandler.exitApp();
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
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" style={globalStyles.primaryColor} />
          </Button>
        </Left>
        <Right>
          <Button transparent onPress={confirmExit}>
            <Feather name="power" size={25} style={styles.logout} />
            <Title style={styles.logout}>Logout</Title>
          </Button>
        </Right>
      </Header>
      <Content>
        <Text>Profile</Text>
      </Content>
    </Container>
  );
}
