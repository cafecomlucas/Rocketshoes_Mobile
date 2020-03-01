import React from 'react';
import {View} from 'react-native';
import {Container, CartButton, CartButtonText, CartIcon} from './styles';

const Header = () => (
  <Container>
    <View />
    <CartButton>
      <CartIcon name="shopping-basket" />
      <CartButtonText>0</CartButtonText>
    </CartButton>
  </Container>
);

export default Header;
