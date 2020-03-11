import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {IntlProvider, FormattedNumber} from 'react-intl';

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

import {
  removeFromCart,
  updateAmountRequest,
} from '../../store/modules/cart/actions';

const Cart = ({navigation}) => {
  /** GLOBAL STATE */
  const dispatch = useDispatch();
  const cartSize = useSelector(state => state.cart.products.length);
  const products = useSelector(state =>
    state.cart.products.map(product => ({
      ...product,
      subTotal: product.price * product.amount,
    }))
  );
  const loadingProduct = useSelector(state =>
    state.cart.loadingProduct.reduce((loadingProduct, product) => {
      loadingProduct[product.id] = product.status;
      return loadingProduct;
    }, {})
  );
  const loading = useSelector(state => state.cart.loading);
  const productsTotal = useSelector(state =>
    state.cart.products.reduce(
      (sumTotal, product) => sumTotal + product.price * product.amount,
      0
    )
  );

  /** HANDLER METHODS */
  const handleDelete = useCallback(
    id => {
      if (loading) return;
      dispatch(removeFromCart(id));
    },
    [loading, dispatch]
  );

  const handleIncrement = useCallback(
    ({id, amount}) => {
      if (loading) return;
      dispatch(updateAmountRequest(id, amount + 1));
    },
    [loading, dispatch]
  );

  const handleDecrement = useCallback(
    ({id, amount}) => {
      if (loading) return;
      dispatch(updateAmountRequest(id, amount - 1));
    },
    [loading, dispatch]
  );

  /** RENDER */
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
    <IntlProvider locale="pt-BR">
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
                    <Price>
                      <FormattedNumber
                        value={product.price}
                        style="currency"
                        currency="BRL"
                      />
                    </Price>
                  </InfoContainer>
                </ProductInfo>
                <RemoveItemButton onPress={() => handleDelete(product.id)}>
                  <RemoveItemIcon name="delete-forever" />
                </RemoveItemButton>
              </ProductLine01>
              <ProductLine02>
                <AmountContainer>
                  <RemoveAmountButton onPress={() => handleDecrement(product)}>
                    <RemoveAmountIcon
                      loading-data={loadingProduct[product.id]}
                      name="remove-circle-outline"
                    />
                  </RemoveAmountButton>
                  <InputAmount
                    value={String(product.amount)}
                    editable={false}
                  />
                  <AddAmountButton onPress={() => handleIncrement(product)}>
                    <AddAmountIcon
                      loading-data={loadingProduct[product.id]}
                      name="add-circle-outline"
                    />
                  </AddAmountButton>
                </AmountContainer>
                <SubTotal>
                  <FormattedNumber
                    value={product.subTotal}
                    style="currency"
                    currency="BRL"
                  />
                </SubTotal>
              </ProductLine02>
            </ProductContainer>
          )}
        />

        <TotalContainer>
          <TotalTitle>Total</TotalTitle>
          <TotalPrice>
            <FormattedNumber
              value={productsTotal}
              style="currency"
              currency="BRL"
            />
          </TotalPrice>
          <NextButton>
            <NextButtonText>Finalizar Pedido</NextButtonText>
          </NextButton>
        </TotalContainer>
      </Container>
    </IntlProvider>
  );
};

export default Cart;
