import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Text} from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';

// import { Container } from './styles';

console.tron.log('iniciou!');
const App = () => (
  <NavigationContainer>
    <Text>** Header **</Text>
    <Routes />
  </NavigationContainer>
);

export default App;
