import React, {useState, useEffect} from 'react';
import {Text, View, Dimensions} from 'react-native';
import styles from './Signin.Styles';
import {Container, Button, Spinner, Toast, Footer} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputFieldWithIcon from '../../components/inputFieldWithIcon';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../../redux/Actions/userActions';
import {StackActions} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

export default function Signin({navigation}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [hidden, setHidden] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(null);
  const [isEmailValid, setEmailValid] = useState(null);
  const auth = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const loginResponse = useSelector(state => state.login);

  let screenHeight = Dimensions.get('window').height;

  useEffect(() => {
    // check if there are notifications message
    if (Object.entries(loginResponse).length !== 0) {
      if (!loginResponse.successful) {
        // display errors
        Toast.show({
          text: loginResponse.message,
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
          text: loginResponse.message,
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
  }, [dispatch, navigation, loginResponse]);

  useEffect(() => {
    const subscription = navigation.addListener('focus', () => {
      auth && navigation.dispatch(StackActions.replace('Home'));
    });
    return subscription;
  }, [navigation, auth]);

  const handleSubmit = async () => {
    let user = {
      email: email,
      password: password,
    };

    setHidden(true);
    setSubmitted(true);
    dispatch(login(user));
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

  const handleVisibility = () => {
    setHidden(hidden ? false : true);
  };

  return (
    <Container style={{height: screenHeight, backgroundColor: '#fff'}}>
      <ScrollView>
        <View style={styles.logo}>
          <Ionicons name="ios-chatbubbles" color="#3052ae" size={90} />
          <Text style={styles.text}>Welcome. Login</Text>
        </View>

        <View style={styles.inputView}>
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
            placeholder="Enter email"
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
            placeholder="Enter password"
            onChangeText={text => validatePassword(text)}
            returnKeyType="done"
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

          <Button
            full
            rounded
            disabled={
              !email ||
              !password ||
              !isPasswordValid ||
              !isEmailValid ||
              submitted
                ? true
                : false
            }
            style={styles.button}
            onPress={handleSubmit}>
            {!submitted && <Text style={styles.buttonText}>Login</Text>}
            {submitted && <Spinner color="white" />}
          </Button>
        </View>

        <Footer style={styles.buttonContent}>
          <Button
            full
            rounded
            androidRippleColor="transparent"
            style={styles.buttonWithIcon}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.buttonTextFirst}>Don't have an account?</Text>
            <Text style={styles.subText}>Register</Text>
          </Button>
        </Footer>
      </ScrollView>
    </Container>
  );
}
