import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  margin: 20px 15px;
  flex-direction:row;
`;

export const Product = styled.View`
  background: #fff;
  padding: 20px 15px;
  border-radius: 4px;
  margin-right: 15px;
`;

export const ProductImage = styled.Image`
  align-self: center;
  width: 200px;
  height: 200px;
`;

export const Title = styled.Text`
  font-size: 16px;
  line-height: 20px;
  margin-top: 5px;
  color: #333;
`;

export const Price = styled.Text`
 font-size: 21px;
  font-weight: bold;
  margin: 5px 0 20px;
  color: #000;
`;

export const AddButton = styled(RectButton)`
  flex-direction:row;
  background: #395c80;
  color: #fff;
  border-radius: 4px;
  overflow: hidden;
  align-items: center;
  font-size: 14px;
`;

export const AmountContainer = styled.View`
  flex-direction:row;
  background: rgba(0, 0, 0, 0.2);
  padding: 12px;
  align-self: stretch;
  justify-content: center;
  align-items: center;
`;

export const AddIcon = styled(Icon)`
  margin-right: 5px;
`;

export const TextAmount = styled.Text`
  font-size:12px;
  color:#fff;
`;

export const AddText = styled.Text`
  flex: 1;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  color:#fff;
  font-size:14px;
`;
