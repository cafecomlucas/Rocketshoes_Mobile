import React from 'react';
import {connect} from 'react-redux';

import {
  Container,
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

const Cart = ({products}) => (
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
            <RemoveItemButton>
              <RemoveItemIcon name="delete-forever" />
            </RemoveItemButton>
          </ProductLine01>
          <ProductLine02>
            <AmountContainer>
              <RemoveAmountButton>
                <RemoveAmountIcon name="remove-circle-outline" />
              </RemoveAmountButton>
              <InputAmount value={String(product.amount)} editable={false} />
              <AddAmountButton>
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

const mapStateToProps = state => ({
  products: state.cart.products,
});

export default connect(mapStateToProps)(Cart);
