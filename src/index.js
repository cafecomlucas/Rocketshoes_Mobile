import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import './config/ReactotronConfig';

import store from './store';

import Routes from './routes';

console.tron.log('iniciou!');
const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content" backgroundColor="#141419" />
    <Routes />
  </Provider>
);

export default App;
