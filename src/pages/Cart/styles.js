import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  margin: 20px 15px 15px 15px;
  padding: 15px;
`;

export const EmptyIcon = styled(Icon)`
  color: #a0a0a0;
  font-size: 64px;
  text-align: center;
`;
export const NoProductsLine01 = styled.Text`
  color: #333;
  font-size: 32px;
  line-height: 35px;
  padding: 15px 0 5px 0;
  text-align: center;
`;
export const NoProductsLine02 = styled.Text`
  color: #333;
  font-size: 22px;
  line-height: 25px;
  padding-bottom: 15px;
  text-align: center;
`;
export const BackToHomeButton = styled(RectButton)`
  background: #395c80;
  border-radius: 4px;
  padding: 12px 20px;
  text-decoration: none;
  margin: 15px auto 15px auto;
`;
export const BackToHomeButtonText = styled.Text`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
`;

export const ProductList = styled.FlatList`
  max-height: 300px;
`;

export const ProductContainer = styled.View`
  margin-bottom: 15px;
`;

export const ProductLine01 = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  width: 180px;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;
export const InfoContainer = styled.View`
  margin-left: 10px;
`;
export const Title = styled.Text`
  font-size: 14px;
  color: #000;
`;
export const Price = styled.Text`
  font-size: 14px;
  color: #000;
  font-weight: bold;
`;
export const RemoveItemButton = styled(RectButton)``;
export const RemoveItemIcon = styled(Icon)`
  color: #395c80;
  font-size: 26px;
  padding: 4px;
`;

export const ProductLine02 = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #e7e7e7;
  border-radius: 4px;
  padding: 8px 12px 8px 8px;
`;
export const AmountContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const RemoveAmountButton = styled(RectButton)``;
export const RemoveAmountIcon = styled(Icon)`
  color: #395c80;
  font-size: 22px;
  padding: 4px;
`;
export const AddAmountButton = styled(RectButton)``;
export const AddAmountIcon = styled(Icon)`
  color: #395c80;
  font-size: 22px;
  padding: 4px;
`;
export const InputAmount = styled.TextInput`
  font-size: 14px;
  background: #f7f7f7;
  border: 1px solid #ccc;
  color: #777;
  padding: 2px 16px;
  margin: 0 4px;
  text-align: center;
  align-items: center;
`;
export const SubTotal = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const TotalContainer = styled.View`
  margin-top: 15px;
  align-items: center;
`;
export const TotalTitle = styled.Text`
  text-transform: uppercase;
  color: #777;
  font-weight: bold;
  font-size: 16px;
`;
export const TotalPrice = styled.Text`
  font-weight: bold;
  font-size: 26px;
`;
export const NextButton = styled(RectButton)`
  margin-top: 30px;
  align-items: center;
  width: 100%;
  background: #395c80;
  padding: 15px;
  border-radius: 4px;
`;
export const NextButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
`;
