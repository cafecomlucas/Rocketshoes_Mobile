import React, {Component} from 'react';
import {connect} from 'react-redux';
import api from '../../services/api';
import {numberFormat} from '../../util/format';
import {addToCart} from '../../store/modules/cart/actions';

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

  handleAdd = product => {
    const {dispatch} = this.props;
    dispatch(addToCart(product));
  };

  render() {
    const {products} = this.state;
    const {amount} = this.props;

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
              <AddButton onPress={() => this.handleAdd(product)}>
                <AmountContainer>
                  <AddIcon name="add-shopping-cart" size={22} color="#fff" />
                  <TextAmount> {amount[product.id] || 0}</TextAmount>
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

const mapStateToProps = state => ({
  amount: state.cart.products.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount;
    return sumAmount;
  }, {}),
});

export default connect(mapStateToProps)(Home);
