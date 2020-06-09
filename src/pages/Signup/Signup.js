import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './Signup.Styles';
import {Container, Button, Header, Left, Icon, Title} from 'native-base';
import {strings} from '../../utils/strings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import InputFieldWithIcon from '../../components/inputFieldWithIcon';

export default function Signup({navigation, route}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate('Home');
  //   }, 3000);
  //   return () => {
  //     // cleanup
  //   };
  // }, [navigation]);

  const handleSubmit = () => {};

  return (
    <Container style={styles.container}>
      <Header style={styles.header}>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" style={styles.icon} />
            <Title style={styles.title}>{route.name}</Title>
          </Button>
        </Left>
      </Header>

      <View style={styles.logo}>
        <Ionicons name="ios-chatbubbles" color="#3052ae" size={100} />
        <Text style={styles.text}> {strings.appName}</Text>
        <Text style={styles.subText}>Signup here</Text>
      </View>

      <View style={styles.inputView}>
        <InputFieldWithIcon
          iconName="user"
          iconColor="#1e2c65"
          iconSize={20}
          autoFocus={false}
          placeholder="Enter email"
          onChangeText={text => setEmail(text)}
          returnKeyType="next"
          keyboardType="email-address"
          placeholderTextColor="#1e2c65"
          textContentType="emailAddress"
          secureTextEntry={false}
          value={email}
        />

        <InputFieldWithIcon
          iconName="lock"
          iconColor="#1e2c65"
          iconSize={20}
          autoFocus={false}
          placeholder="Enter password"
          onChangeText={text => setPassword(text)}
          returnKeyType="done"
          keyboardType="default"
          placeholderTextColor="#1e2c65"
          textContentType="password"
          secureTextEntry={true}
          value={password}
        />

        <Button full rounded style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Sign in</Text>
        </Button>
      </View>

      <View style={styles.buttonContent}>
        <Button
          full
          rounded
          style={styles.buttonWithIcon}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={{color: '#3052ae'}}>Click here to register</Text>
          <Feather
            name="arrow-right"
            color="#3052ae"
            size={20}
            style={styles.buttonIcon}
          />
        </Button>
      </View>
    </Container>
  );
}
