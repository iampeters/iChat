import React from 'react';
import {View, Input, Button} from 'native-base';
import {StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function InputFieldWithIcon({
  iconName,
  iconColor,
  iconSize,
  placeholder,
  placeholderTextColor,
  returnKeyType,
  keyboardType,
  autoFocus,
  onChangeText,
  textContentType,
  secureTextEntry,
  value,
  ref,
  isPassword,
  onIconPress,
  rightIconName,
  disabled,
  maxLength,
  onSubmitEditing,
  blurOnSubmit,
  autoCapitalize,
}) {
  return (
    <View style={styles.inputWrapper}>
      <Feather
        name={iconName}
        color={iconColor}
        size={iconSize}
        style={styles.inputLeftIcon}
      />
      <Input
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        returnKeyType={returnKeyType}
        keyboardType={keyboardType}
        autoFocus={autoFocus}
        onChangeText={onChangeText}
        textContentType={textContentType}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
        value={value}
        ref={ref}
        autoCapitalize={autoCapitalize}
        disabled={disabled}
        blurOnSubmit={blurOnSubmit}
        onSubmitEditing={onSubmitEditing}
      />
      {isPassword && (
        <Button transparent onPress={onIconPress} style={styles.inputRightIcon}>
          <Feather name={rightIconName} color={'#1e2c65'} size={22} />
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    backgroundColor: 'white',
    justifyContent: 'space-around',
    flexDirection: 'row',
    position: 'relative',
    width: '85%',
    padding: 5,
    paddingLeft: 50,
    paddingRight: 20,
    borderRadius: 50,
    height: 60,
    marginBottom: 25,
    elevation: 5,
  },
  empty: {},
  inputLeftIcon: {
    position: 'absolute',
    top: 18,
    left: 20,
  },
  inputRightIcon: {
    position: 'absolute',
    top: 7,
    right: 20,
  },
});
