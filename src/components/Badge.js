import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export function IconWithBadge({name, badgeCount, color, size}) {
  return (
    <View style={styles.container}>
      <Feather name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View style={styles.content}>
          <Text style={styles.text}>{badgeCount}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    margin: 6,
  },
  content: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: 'red',
    borderRadius: 20,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
