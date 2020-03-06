import React, {Component} from 'react';
import {connect} from 'react-redux';

import {numberFormat} from '../../util/format';

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

class Cart extends Component {
  state = {
    formattedSubTotal: {},
    formattedTotal: 0,
  };

  async componentDidMount() {
    const {products, productsTotal} = this.props;

    const formattedSubTotal = await this.formatSubTotals(products);

    const formattedTotal = await numberFormat.format(productsTotal);

    this.setState({formattedSubTotal, formattedTotal});
  }

  async componentDidUpdate(prevProps) {
    const {products, productsTotal} = this.props;

    if (prevProps.products !== products) {
      const formattedSubTotal = await this.formatSubTotals(products);
      this.setState({formattedSubTotal});
    }

    if (prevProps.productsTotal !== productsTotal) {
      const formattedTotal = await numberFormat.format(productsTotal);
      this.setState({formattedTotal});
    }
  }

  async formatSubTotals(products) {
    this.formattedSubTotal = {};
    await Promise.all(
      products.map(async product => {
        this.formattedSubTotal[product.id] = await numberFormat.format(
          product.subTotal
        );
      })
    );
    return this.formattedSubTotal;
  }

  handleDelete(id) {
    const {dispatch} = this.props;
    dispatch(removeFromCart(id));
  }

  handleIncrement(product) {
    const {dispatch} = this.props;
    dispatch(updateAmount(product.id, product.amount + 1));
  }

  handleDecrement(product) {
    const {dispatch} = this.props;
    dispatch(updateAmount(product.id, product.amount - 1));
  }

  render() {
    const {navigation, cartSize, products} = this.props;
    const {formattedSubTotal, formattedTotal} = this.state;

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
                <RemoveItemButton onPress={() => this.handleDelete(product.id)}>
                  <RemoveItemIcon name="delete-forever" />
                </RemoveItemButton>
              </ProductLine01>
              <ProductLine02>
                <AmountContainer>
                  <RemoveAmountButton
                    onPress={() => this.handleDecrement(product)}>
                    <RemoveAmountIcon name="remove-circle-outline" />
                  </RemoveAmountButton>
                  <InputAmount
                    value={String(product.amount)}
                    editable={false}
                  />
                  <AddAmountButton
                    onPress={() => this.handleIncrement(product)}>
                    <AddAmountIcon name="add-circle-outline" />
                  </AddAmountButton>
                </AmountContainer>
                <SubTotal>{formattedSubTotal[product.id]}</SubTotal>
              </ProductLine02>
            </ProductContainer>
          )}
        />

        <TotalContainer>
          <TotalTitle>Total</TotalTitle>
          <TotalPrice>{formattedTotal}</TotalPrice>
          <NextButton>
            <NextButtonText>Finalizar Pedido</NextButtonText>
          </NextButton>
        </TotalContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.cart.products.map(product => ({
    ...product,
    subTotal: product.price * product.amount,
  })),
  cartSize: state.cart.products.length,
  productsTotal: state.cart.products.reduce(
    (sumTotal, product) => sumTotal + product.price * product.amount,
    0
  ),
});

export default connect(mapStateToProps)(Cart);
