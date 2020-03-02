import React from 'react';

import {
  Container,
  Product,
  ProductImage,
  Title,
  Price,
  AddButton,
  AmountContainer,
  AddIcon,
  TextAmount,
  AddText,
} from './styles';

const Home = () => (
  <Container>
    <Product>
      <ProductImage
        source={{
          uri:
            'https://static.netshoes.com.br/produtos/tenis-caminhada-detalhes-em-couro-masculino/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x',
        }}
      />
      <Title>Tênis maneiro</Title>
      <Price>R$ 139,90</Price>
      <AddButton>
        <AmountContainer>
          <AddIcon name="add-shopping-cart" size={22} color="#fff" />
          <TextAmount> 3</TextAmount>
        </AmountContainer>
        <AddText>ADICIONAR</AddText>
      </AddButton>
    </Product>

    <Product>
      <ProductImage
        source={{
          uri:
            'https://static.netshoes.com.br/produtos/tenis-caminhada-detalhes-em-couro-masculino/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x',
        }}
      />
      <Title>Tênis maneiro</Title>
      <Price>R$ 139,90</Price>
      <AddButton>
        <AmountContainer>
          <AddIcon name="add-shopping-cart" size={22} color="#fff" />
          <TextAmount> 3</TextAmount>
        </AmountContainer>
        <AddText>ADICIONAR</AddText>
      </AddButton>
    </Product>
  </Container>
);

export default Home;
