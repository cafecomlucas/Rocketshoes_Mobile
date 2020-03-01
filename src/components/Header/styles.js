import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const HeaderNav = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const LogoButton = styled(RectButton)`
  margin-left: 15px;
  width: 55%;
`;

export const LogoImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
`;

export const CartButton = styled(RectButton)`
  margin-right: 15px;
  position: relative;
  align-self: flex-end;
`;

export const CartIcon = styled(Icon)`
  padding: 0 10px 0 0;
  font-size: 32px;
  color: #fff;
`;

export const CartButtonText = styled.Text`
  position: absolute;
  right: 0;
  top: 0;
  background: #395c80;
  color: #fff;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 10px;
  text-align: center;
  font-size: 10px;
`;
