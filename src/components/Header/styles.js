import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CartButton = styled(RectButton)`
  margin: 20px 10px 0 10px;
  position: relative;
`;

export const CartIcon = styled(Icon)`
  padding: 0 10px 0 0;
  font-size: 42px;
  color: #fff;
`;

export const CartButtonText = styled.Text`
  position: absolute;
  right: 0;
  top: 0;
  background: #395c80;
  color: #fff;
  width: 22px;
  height: 22px;
  line-height: 22px;
  border-radius: 11px;
  text-align: center;
  font-size: 12px;
`;
