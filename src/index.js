import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import './config/ReactotronConfig';
import {Container} from './components/App';
import Header from './components/Header';
import Routes from './routes';

console.tron.log('iniciou!');
const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#395c80" />
    <Container>
      <NavigationContainer>
        <Header />
        <Routes />
      </NavigationContainer>
    </Container>
  </>
);

export default App;
