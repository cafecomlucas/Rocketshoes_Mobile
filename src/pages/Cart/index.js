import React from 'react';

import {
  Container,
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

const Cart = () => (
  <Container>
    <ProductContainer>
      <ProductLine01>
        <ProductInfo>
          <ProductImage
            source={{
              uri:
                'https://static.netshoes.com.br/produtos/tenis-caminhada-detalhes-em-couro-masculino/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x',
            }}
          />
          <InfoContainer>
            <Title>Tênis maneiromaneiro maneiro maneiro maneiro</Title>
            <Price>R$ 179,90</Price>
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
          <InputAmount value="3" editable={false} />
          <AddAmountButton>
            <AddAmountIcon name="add-circle-outline" />
          </AddAmountButton>
        </AmountContainer>
        <SubTotal>R$ 539,70</SubTotal>
      </ProductLine02>
    </ProductContainer>

    <ProductContainer>
      <ProductLine01>
        <ProductInfo>
          <ProductImage
            source={{
              uri:
                'https://static.netshoes.com.br/produtos/tenis-caminhada-detalhes-em-couro-masculino/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x',
            }}
          />
          <InfoContainer>
            <Title>Tênis maneiromaneiro maneiro maneiro maneiro</Title>
            <Price>R$ 179,90</Price>
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
          <InputAmount value="3" editable={false} />
          <AddAmountButton>
            <AddAmountIcon name="add-circle-outline" />
          </AddAmountButton>
        </AmountContainer>
        <SubTotal>R$ 539,70</SubTotal>
      </ProductLine02>
    </ProductContainer>

    <TotalContainer>
      <TotalTitle>Total</TotalTitle>
      <TotalPrice>R$ 1619,10</TotalPrice>
      <NextButton>
        <NextButtonText>Finalizar Pedido</NextButtonText>
      </NextButton>
    </TotalContainer>
  </Container>
);

export default Cart;
