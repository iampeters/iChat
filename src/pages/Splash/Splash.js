import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from './Splash.Styles';
import {Container, Button} from 'native-base';
import {strings} from '../../utils/strings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useSelector, useDispatch} from 'react-redux';
import {StackActions} from '@react-navigation/native';

export default function Splash({navigation}) {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {});

    if (auth.isAuthenticated) {
      navigation.dispatch(StackActions.replace('Home'));
    }

    return unsubscribe;
  }, [navigation, dispatch, auth.isAuthenticated]);

  return (
    <Container>
      <View style={styles.logo}>
        <Ionicons name="ios-chatbubbles" color="#3052ae" size={150} />
        <Text style={styles.text}> {strings.appName}</Text>
        <Text style={styles.subText}>Welcome to iChat</Text>
      </View>
      <View style={styles.buttonContent}>
        <Button
          full
          rounded
          style={styles.button}
          onPress={() => navigation.navigate('Signin')}>
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
