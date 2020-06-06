/**
 * @format
 */
// import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import configureStore from './redux/configureStore';
import {Provider} from 'react-redux';
import {Root} from 'native-base';

const store = configureStore();

const RNRedux = () => (
  <Root>
    <Provider store={store}>
      <App />
    </Provider>
  </Root>
);

AppRegistry.registerComponent(appName, () => RNRedux);
