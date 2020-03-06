import React from 'react';
import {connect} from 'react-redux';

import {
  Container,
  EmptyIcon,
  NoProductsLine01,
  NoProductsLine02,
  BackToHomeButton,
  BackToHomeButtonText,
  ProductList,
  ProductContainer,
  ProductLine01,
  ProductInfo,
  ProductImage,
  InfoContainer,
  Title,
  Price,
  RemoveItemButton,
  RemoveItemIcon,
  ProductLine02,
  AmountContainer,
  RemoveAmountButton,
  RemoveAmountIcon,
  AddAmountButton,
  AddAmountIcon,
  InputAmount,
  SubTotal,
  TotalContainer,
  TotalTitle,
  TotalPrice,
  NextButton,
  NextButtonText,
} from './styles';

import {removeFromCart, updateAmount} from '../../store/modules/cart/actions';

const Cart = ({products, navigation, cartSize, dispatch}) => {
  function handleDelete(id) {
    dispatch(removeFromCart(id));
  }
  function handleIncrement(product) {
    dispatch(updateAmount(product.id, product.amount + 1));
  }
  function handleDecrement(product) {
    dispatch(updateAmount(product.id, product.amount - 1));
  }
  return cartSize <= 0 ? (
    <Container>
      <EmptyIcon name="remove-shopping-cart" />
      <NoProductsLine01>Ops!</NoProductsLine01>
      <NoProductsLine02>Carrinho vazio</NoProductsLine02>
      <BackToHomeButton onPress={() => navigation.navigate('Home')}>
        <BackToHomeButtonText>Adicionar um produto</BackToHomeButtonText>
      </BackToHomeButton>
    </Container>
  ) : (
    <Container>
      <ProductList
        data={products}
        keyExtractor={product => String(product.id)}
        renderItem={({item: product}) => (
          <ProductContainer>
            <ProductLine01>
              <ProductInfo>
                <ProductImage
                  source={{
                    uri: product.image,
                  }}
                />
                <InfoContainer>
                  <Title>{product.title}</Title>
                  <Price>{product.formattedPrice}</Price>
                </InfoContainer>
              </ProductInfo>
              <RemoveItemButton onPress={() => handleDelete(product.id)}>
                <RemoveItemIcon name="delete-forever" />
              </RemoveItemButton>
            </ProductLine01>
            <ProductLine02>
              <AmountContainer>
                <RemoveAmountButton onPress={() => handleDecrement(product)}>
                  <RemoveAmountIcon name="remove-circle-outline" />
                </RemoveAmountButton>
                <InputAmount value={String(product.amount)} editable={false} />
                <AddAmountButton onPress={() => handleIncrement(product)}>
                  <AddAmountIcon name="add-circle-outline" />
                </AddAmountButton>
              </AmountContainer>
              <SubTotal>R$ 000,00</SubTotal>
            </ProductLine02>
          </ProductContainer>
        )}
      />

      <TotalContainer>
        <TotalTitle>Total</TotalTitle>
        <TotalPrice>R$ 0000,00</TotalPrice>
        <NextButton>
          <NextButtonText>Finalizar Pedido</NextButtonText>
        </NextButton>
      </TotalContainer>
    </Container>
  );
};

const mapStateToProps = state => ({
  products: state.cart.products,
  cartSize: state.cart.products.length,
});

export default connect(mapStateToProps)(Cart);
