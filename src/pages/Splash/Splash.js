import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from './Splash.Styles';
import {Container, Button} from 'native-base';
import {strings} from '../../utils/strings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import {StackActions} from '@react-navigation/native';

export default function Splash({navigation}) {
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    const subscription = navigation.addListener('focus', () => {
      auth.isAuthenticated && navigation.dispatch(StackActions.replace('Home'));
    });
    return subscription;
  }, [auth.isAuthenticated, navigation]);

  return (
    <Container>
      <View style={styles.logo}>
        <Ionicons name="ios-chatbubbles" color="#3052ae" size={150} />
        <Text style={styles.text}> {strings.appName}</Text>
      </View>
      <View style={styles.buttonContent}>
        <Button
          full
          rounded
          style={styles.button}
          onPress={() => navigation.dispatch(StackActions.replace('Signin'))}>
          <Text style={styles.buttonText}>Get Started</Text>
          <FontAwesome5
            name="arrow-right"
            color="#fff"
            style={styles.buttonIcon}
          />
        </Button>
      </View>
    </Container>
  );
}
