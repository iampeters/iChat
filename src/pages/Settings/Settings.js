import React from 'react';
import {Container, Text} from 'native-base';
import styles from './Settings.Styles';

export default function Settings({navigation, route}) {
  return (
    <Container style={styles.container}>
      <Text>{route.name}</Text>
    </Container>
  );
}
