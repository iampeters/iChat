import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
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
    backgroundColor: '#00d68f',
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
  chatContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  rightBubble: {
    width: 'auto',
    maxWidth: '80%',
    backgroundColor: '#f0f0f5',
    color: '#fff',
    borderRadius: 25,
    borderBottomRightRadius: 0,
    alignSelf: 'flex-end',
    marginBottom: 20,
    marginRight: 10,
    elevation: 2,
  },
  leftBubble: {
    width: 'auto',
    maxWidth: '80%',
    backgroundColor: '#6355a6',
    color: '#fff',
    borderRadius: 25,
    borderBottomLeftRadius: 0,
    alignSelf: 'flex-start',
    marginBottom: 20,
    elevation: 2,
  },
  leftTimeStamp: {
    color: '#cccbd2',
  },
  leftBubbleText: {
    color: '#fff',
  },
});

export default globalStyles;
