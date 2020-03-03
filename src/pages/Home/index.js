import React, {Component} from 'react';
import api from '../../services/api';

import {
  Container,
  ProductList,
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

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');
    const products = response.data;
    this.setState({products});
  }

  render() {
    const {products} = this.state;

    return (
      <Container>
        <ProductList
          data={products}
          horizontal
          showsHorizontalScrollIndicator
          keyExtractor={product => product.id}
          renderItem={({item: product}) => (
            <Product>
              <ProductImage
                source={{
                  uri: product.image,
                }}
              />
              <Title>{product.title}</Title>
              <Price>{product.price}</Price>
              <AddButton>
                <AmountContainer>
                  <AddIcon name="add-shopping-cart" size={22} color="#fff" />
                  <TextAmount> 3</TextAmount>
                </AmountContainer>
                <AddText>ADICIONAR</AddText>
              </AddButton>
            </Product>
          )}
        />
      </Container>
    );
  }
}

export default Home;
