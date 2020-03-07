import React, {Component} from 'react';
import {connect} from 'react-redux';
import {IntlProvider, FormattedNumber} from 'react-intl';
import api from '../../services/api';
import {addToCartRequest} from '../../store/modules/cart/actions';

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
        /*   formattedPrice: await numberFormat.format(product.price), */
      }))
    );
    this.setState({products});
  }

  handleAdd = id => {
    const {dispatch} = this.props;
    dispatch(addToCartRequest(id));
  };

  render() {
    const {products} = this.state;
    const {amount} = this.props;

    return (
      <IntlProvider locale="pt-BR">
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
                <Price>
                  <FormattedNumber
                    value={product.price}
                    style="currency"
                    currency="BRL"
                  />
                </Price>
                <AddButton onPress={() => this.handleAdd(product.id)}>
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
      </IntlProvider>
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
