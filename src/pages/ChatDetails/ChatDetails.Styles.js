import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    fontWeight: '600',
  },
  thumbnail: {width: 35, height: 35, borderRadius: 35 / 2},
  nameStatus: {
    marginLeft: 20,
  },
  status: {
    fontSize: 12,
  },
  sendButton: {
    backgroundColor: 'green',
    borderRadius: 50 / 2,
    width: 50,
    height: 50,
    marginRight: 10,
  },
  right: {flex: 1},
  left: {
    flex: 4,
    width: '100%',
    backgroundColor: 'gray',
    borderRadius: 100,
    paddingLeft: 8,
    paddingRight: 8,
    marginBottom: 3,
    marginLeft: 10,
    color: 'white',
  },
  footer: {
    backgroundColor: 'white',
  },
  footerTab: {
    backgroundColor: 'white',
    borderRadius: 100,
  },
  searchBar: {
    backgroundColor: 'gray',
    color: 'white',
    borderRadius: 100,
  },
  icon: {
    color: '#fafafa',
  },
  attachIcon: {
    color: '#fafafa',
    marginRight: 10,
  },
  sendIcon: {
    color: 'white',
  },
});

export default styles;
