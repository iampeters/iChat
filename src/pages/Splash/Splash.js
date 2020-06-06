import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from './Splash.Styles';
import {Container} from 'native-base';
import {strings} from '../../utils/strings';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
    return () => {
      // cleanup
    };
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Container style={styles.container}>
        <View>
          <Text style={styles.text}> {strings.appName}</Text>
        </View>
      </Container>
    </SafeAreaView>
  );
}
