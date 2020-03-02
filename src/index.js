import React from 'react';

import {StatusBar} from 'react-native';
import './config/ReactotronConfig';
import Routes from './routes';

console.tron.log('iniciou!');
const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#141419" />
    <Routes />
  </>
);

export default App;
