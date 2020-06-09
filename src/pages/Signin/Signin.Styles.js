import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  icon: {
    color: '#3052ae',
    fontWeight: '900',
  },
  title: {
    color: '#3052ae',
    fontWeight: '900',
    marginLeft: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
  },
  subText: {
    color: '#3052ae',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 5,
  },
  buttonTextFirst: {color: 'gray', fontSize: 14},
  content: {
    flex: 1,
    // backgroundColor: 'black',
  },
  logo: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 220,
    // backgroundColor: 'red',
  },
  inputView: {
    // flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'green',
    height: 380,
  },
  inputWrapper: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
    width: '80%',
    padding: 5,
    paddingLeft: 50,
    paddingRight: 20,
    borderRadius: 50,
    height: 60,
    elevation: 5,
  },
  input: {},
  inputIcon: {
    position: 'absolute',
    top: 12,
    left: 15,
  },
  buttonContent: {
    // height: 100,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 0,
  },
  button: {
    width: '80%',
    justifyContent: 'center',
    backgroundColor: '#3052ae',
    alignSelf: 'center',
    height: 60,
    marginTop: 25,
  },
  buttonWithIcon: {
    width: '80%',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignSelf: 'center',
    height: 60,
    elevation: 0,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonIcon: {
    // color: '#ffffff',
    fontWeight: '700',
    marginLeft: 10,
  },
});

export default styles;
