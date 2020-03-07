import styled, {css} from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ActivityIndicator} from 'react-native';

export const ContainerLoading = styled.View`
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;

export const LoadingIcon = styled(ActivityIndicator)``;

export const Container = styled.View`
  margin: 20px 15px;
  flex-direction: row;
`;

export const ProductList = styled.FlatList.attrs({
  contentContainerStyle: {flexDirection: 'row'},
})``;

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
  width: 200px;
`;

export const Price = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin: 5px 0 20px;
  color: #000;
`;

export const AddButton = styled(RectButton).attrs(props => ({
  disabled: props['loading-data'],
}))`
  flex-direction: row;
  margin-top: auto;
  background: #395c80;
  color: #fff;
  border-radius: 4px;
  overflow: hidden;
  align-items: center;
  font-size: 14px;
  ${props =>
    props.disabled &&
    css`
      background: #424242;
      opacity: 0.6;
    `}
`;

export const AmountContainer = styled.View`
  flex-direction: row;
  background: rgba(0, 0, 0, 0.2);
  padding: 12px;
  min-height: 22px;
  min-width: 60px;
  align-self: stretch;
  justify-content: center;
  align-items: center;
`;

export const AddIcon = styled(Icon)`
  margin-right: 5px;
`;

export const LoadingButtonIcon = styled(ActivityIndicator)`
  margin-right: 5px;
`;

export const TextAmount = styled.Text`
  font-size: 12px;
  color: #fff;
`;

export const AddText = styled.Text`
  flex: 1;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  color: #fff;
  font-size: 14px;
`;
