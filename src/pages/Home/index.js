import React, {Component} from 'react';
import api from '../../services/api';
import {numberFormat} from '../../util/format';

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
    const products = await Promise.all(
      response.data.map(async product => ({
        ...product,
        formattedPrice: await numberFormat.format(product.price),
      }))
    );
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
          keyExtractor={product => String(product.id)}
          renderItem={({item: product}) => (
            <Product>
              <ProductImage
                source={{
                  uri: product.image,
                }}
              />
              <Title>{product.title}</Title>
              <Price>{product.formattedPrice}</Price>
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
