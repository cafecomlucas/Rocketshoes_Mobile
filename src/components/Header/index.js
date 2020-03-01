import React from 'react';
import {
  Container,
  LogoButton,
  LogoImage,
  CartButton,
  CartButtonText,
  CartIcon,
} from './styles';
import LogoRocketshoes from '../../assets/rocketshoes-logo.png';

const Header = () => (
  <Container>
    <LogoButton>
      <LogoImage source={LogoRocketshoes} />
    </LogoButton>
    <CartButton>
      <CartIcon name="shopping-basket" />
      <CartButtonText>0</CartButtonText>
    </CartButton>
  </Container>
);

export default Header;
