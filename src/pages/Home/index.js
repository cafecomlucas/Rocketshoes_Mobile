import React, {Component} from 'react';
import {connect} from 'react-redux';
import {IntlProvider, FormattedNumber} from 'react-intl';
import api from '../../services/api';
import {addToCartRequest} from '../../store/modules/cart/actions';

import {
  Container,
  ContainerLoading,
  LoadingIcon,
  ProductList,
  Product,
  ProductImage,
  Title,
  Price,
  AddButton,
  LoadingButtonIcon,
  AmountContainer,
  AddIcon,
  TextAmount,
  AddText,
} from './styles';

class Home extends Component {
  state = {
    products: [],
    loadingProducts: true,
  };

  async componentDidMount() {
    const {data} = await api.get('products');
    const products = data;
    this.setState({products, loadingProducts: false});
  }

  handleAdd = id => {
    const {loading, dispatch} = this.props;

    if (loading) return;

    dispatch(addToCartRequest(id));
  };

  render() {
    const {products, loadingProducts} = this.state;
    const {amount, loadingProduct} = this.props;

    return loadingProducts ? (
      <ContainerLoading>
        <LoadingIcon size={32} color="#FFF" />
      </ContainerLoading>
    ) : (
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
                <AddButton
                  loading-data={loadingProduct[product.id]}
                  onPress={() => this.handleAdd(product.id)}>
                  <AmountContainer>
                    {loadingProduct[product.id] ? (
                      <LoadingButtonIcon size={22} color="#FFF" />
                    ) : (
                      <AddIcon
                        name="add-shopping-cart"
                        size={22}
                        color="#fff"
                      />
                    )}

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

  loading: state.cart.loading,

  loadingProduct: state.cart.loadingProduct.reduce(
    (loadingProduct, product) => {
      loadingProduct[product.id] = product.status;
      return loadingProduct;
    },
    {}
  ),
});

export default connect(mapStateToProps)(Home);
