import React, {useEffect} from 'react';
import {View} from 'react-native';
import styles from './SplashScreen.Styles';
import {Container} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {StackActions} from '@react-navigation/native';
import {isAuthenticated} from '../../../redux/Actions/userActions';

export default function SplashScreen({navigation}) {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(isAuthenticated());

      if (auth.isAuthenticated) {
        navigation.dispatch(StackActions.replace('Home'));
      } else {
        navigation.dispatch(StackActions.replace('Splash'));
      }
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, navigation]);

  return (
    <Container>
      <View style={styles.logo}>
        <Ionicons name="ios-chatbubbles" color="#3052ae" size={150} />
      </View>
    </Container>
  );
}
