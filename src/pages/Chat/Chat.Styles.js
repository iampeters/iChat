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
  badgeContainer: {
    width: 'auto',
    minWidth: 30,
    height: 30,
    // margin: 6,
  },
  badge: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 8,
    width: 'auto',
    minWidth: 20,
    height: 20,
    borderRadius: 42 / 2,
    backgroundColor: '#ff3d71',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default styles;
