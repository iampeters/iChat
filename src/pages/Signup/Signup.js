import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {
  Container,
  Button,
  Spinner,
  Toast,
  Header,
  Left,
  Icon,
  Title,
} from 'native-base';
import styles from './Signup.Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputFieldWithIcon from '../../components/inputFieldWithIcon';
import {useDispatch, useSelector} from 'react-redux';
import {login, register} from '../../../redux/Actions/userActions';
import {StackActions} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

export default function Signup({navigation, route}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [hidden, setHidden] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(null);
  const [isPasswordMatch, setPasswordMatch] = useState(null);
  const [isLastnameValid, setLastnameValid] = useState(null);
  const [isFirstnameValid, setFirstValid] = useState(null);
  const [isEmailValid, setEmailValid] = useState(null);

  const auth = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const registerResponse = useSelector(state => state.register);

  useEffect(() => {
    // check if there are notifications message
    if (Object.entries(registerResponse).length !== 0) {
      if (!registerResponse.successful) {
        // display errors
        Toast.show({
          text: registerResponse.message,
          buttonText: 'Okay',
          type: 'danger',
          position: 'bottom',
          duration: 3000,
          onClose: () =>
            dispatch({
              type: 'AUTHENTICATE',
              payload: {},
            }),
        });

        // enable button
        setSubmitted(false);
      } else {
        // display successful message
        Toast.show({
          text: registerResponse.message,
          type: 'success',
          position: 'bottom',
          duration: 1000,
          onClose: () =>
            dispatch({
              type: 'AUTHENTICATE',
              payload: {},
            }),
        });
      }
    }
  }, [dispatch, navigation, registerResponse]);

  useEffect(() => {
    const subscription = navigation.addListener('focus', () => {
      auth && navigation.dispatch(StackActions.replace('Home'));
    });
    return subscription;
  }, [auth, navigation]);

  const handleSubmit = async () => {
    let user = {
      email,
      password,
      confirmPassword,
      firstname,
      lastname,
    };

    setHidden(true);
    setSubmitted(true);
    dispatch(register(user));
  };

  const validateEmail = text => {
    // email pattern
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!reg.test(text)) {
      setEmailValid(false);
      setEmail(text.toLowerCase());
    } else {
      setEmailValid(true);
      setEmail(text);
    }
  };

  const validateName = (text, type) => {
    // email pattern
    let reg = /^[a-zA-Z]{2,}$/;
    if (!reg.test(text)) {
      if (type === 'firstname') {
        setFirstname(text);
        setFirstValid(false);
      } else {
        setLastname(text);
        setLastnameValid(false);
      }
    } else {
      if (type === 'firstname') {
        setFirstname(text);
        setFirstValid(true);
      } else {
        setLastname(text);
        setLastnameValid(true);
      }
    }
  };

  const validatePassword = text => {
    let reg = /(?=.*\d)(?=.*[a-z]*[A-Z]).{6,}/;
    // min 6 chars
    //  number required
    //   uppercase letter
    if (!reg.test(text)) {
      setPasswordValid(false);
      setPassword(text);
    } else {
      setPasswordValid(true);
      setPassword(text);
    }
  };

  const passwordMatch = text => {
    if (text === password) {
      setPasswordMatch(true);
      setConfirmPassword(text);
    } else {
      setPasswordMatch(false);
      setConfirmPassword(text);
    }
  };

  const handleVisibility = () => {
    setHidden(hidden ? false : true);
  };

  return (
    <Container style={styles.container}>
      <Header style={styles.header}>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" style={styles.icon} />
            <Title style={styles.title}>Signin</Title>
          </Button>
        </Left>
      </Header>
      <ScrollView>
        <View style={styles.logo}>
          <Ionicons name="ios-chatbubbles" color="#3052ae" size={90} />
          <Text style={styles.text}> Create account</Text>
        </View>

        <View style={styles.inputView}>
          {/* email */}
          <InputFieldWithIcon
            iconName="user"
            iconColor={
              isEmailValid
                ? '#00d68f'
                : isEmailValid === null
                ? '#1e2c65'
                : '#ff3d71'
            }
            iconSize={20}
            autoFocus={false}
            placeholder="Email"
            onChangeText={text => validateEmail(text)}
            returnKeyType="next"
            keyboardType="email-address"
            placeholderTextColor="#1e2c65"
            textContentType="emailAddress"
            secureTextEntry={false}
            value={email}
            valid={isEmailValid}
            disabled={submitted}
          />

          {/* firstname */}
          <InputFieldWithIcon
            iconName="user"
            iconColor={
              isFirstnameValid
                ? '#00d68f'
                : isFirstnameValid === null
                ? '#1e2c65'
                : '#ff3d71'
            }
            iconSize={20}
            autoFocus={false}
            placeholder="Firstname"
            onChangeText={text => validateName(text, 'firstname')}
            returnKeyType="next"
            keyboardType="default"
            placeholderTextColor="#1e2c65"
            textContentType="name"
            secureTextEntry={false}
            value={firstname}
            valid={isFirstnameValid}
            disabled={submitted}
          />

          {/* lastname */}
          <InputFieldWithIcon
            iconName="user"
            iconColor={
              isLastnameValid
                ? '#00d68f'
                : isLastnameValid === null
                ? '#1e2c65'
                : '#ff3d71'
            }
            iconSize={20}
            autoFocus={false}
            placeholder="Lastname"
            onChangeText={text => validateName(text, 'lastname')}
            returnKeyType="next"
            keyboardType="default"
            placeholderTextColor="#1e2c65"
            textContentType="name"
            secureTextEntry={false}
            value={lastname}
            valid={isLastnameValid}
            disabled={submitted}
          />

          {/* password */}
          <InputFieldWithIcon
            iconName="lock"
            iconColor={
              isPasswordValid
                ? '#00d68f'
                : isPasswordValid === null
                ? '#1e2c65'
                : '#ff3d71'
            }
            iconSize={20}
            autoFocus={false}
            placeholder="Create password"
            onChangeText={text => validatePassword(text)}
            returnKeyType="next"
            keyboardType="default"
            placeholderTextColor="#1e2c65"
            textContentType="password"
            secureTextEntry={hidden}
            value={password}
            valid={isPasswordValid}
            isPassword={true}
            onIconPress={handleVisibility}
            rightIconName={hidden ? 'eye-off' : 'eye'}
            disabled={submitted}
          />

          {/* confirm password */}
          <InputFieldWithIcon
            iconName="lock"
            iconColor={
              isPasswordMatch
                ? '#00d68f'
                : isPasswordMatch === null
                ? '#1e2c65'
                : '#ff3d71'
            }
            iconSize={20}
            autoFocus={false}
            placeholder="Confirm password"
            onChangeText={text => passwordMatch(text)}
            returnKeyType="done"
            keyboardType="default"
            placeholderTextColor="#1e2c65"
            textContentType="password"
            secureTextEntry={hidden}
            value={confirmPassword}
            valid={isPasswordMatch}
            isPassword={true}
            onIconPress={handleVisibility}
            rightIconName={hidden ? 'eye-off' : 'eye'}
            disabled={submitted}
          />

          <Button
            full
            rounded
            disabled={
              !email ||
              !password ||
              !isPasswordValid ||
              !isEmailValid ||
              !isFirstnameValid ||
              !isLastnameValid ||
              !isPasswordMatch ||
              submitted
                ? true
                : false
            }
            style={styles.button}
            onPress={handleSubmit}>
            {!submitted && (
              <Text style={styles.buttonText}>Create Account</Text>
            )}
            {submitted && <Spinner color="white" />}
          </Button>
        </View>

        <View style={styles.buttonContent}>
          <Button
            full
            rounded
            style={styles.buttonWithIcon}
            onPress={() => navigation.navigate('Signin')}>
            <Text style={styles.buttonTextFirst}>Already a user?</Text>
            <Text style={styles.subText}>Signin here</Text>
          </Button>
        </View>
      </ScrollView>
    </Container>
  );
}
