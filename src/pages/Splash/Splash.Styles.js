import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
  },
  subText: {
    fontSize: 16,
    fontWeight: '300',
    marginTop: 20,
  },
  logo: {
    width: '100%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    // backgroundColor: 'red',
  },

  buttonContent: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '70%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#3052ae',
    height: 60,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonIcon: {
    color: '#ffffff',
    fontWeight: '700',
    marginLeft: 10,
    fontSize: 16,
  },
});

export default styles;
