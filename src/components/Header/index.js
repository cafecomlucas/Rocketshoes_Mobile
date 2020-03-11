import React from 'react';
import {useSelector, connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../../pages/Home';
import Cart from '../../pages/Cart';
import {
  HeaderNav,
  LogoButton,
  LogoImage,
  CartButton,
  CartButtonText,
  CartIcon,
} from './styles';
import LogoRocketshoes from '../../assets/rocketshoes-logo.png';

const Stack = createStackNavigator();

// console.tron.log(Stack.Navigator);

const Header = ({navigation}) => {
  const cartSize = useSelector(state => state.cart.products.length);

  return (
    <>
      <HeaderNav>
        <LogoButton onPress={() => navigation.navigate('Home')}>
          <LogoImage source={LogoRocketshoes} />
        </LogoButton>
        <CartButton onPress={() => navigation.navigate('Cart')}>
          <CartIcon name="shopping-basket" />
          <CartButtonText>{cartSize}</CartButtonText>
        </CartButton>
      </HeaderNav>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: '#191920',
          },
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </>
  );
};

export default Header;
