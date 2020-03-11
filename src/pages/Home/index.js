import React, {useState, useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
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

const Home = () => {
  /** STATE (React) */
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  /** GLOBAL STATE (Redux) */
  const dispatch = useDispatch();
  const amount = useSelector(state =>
    state.cart.products.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );
  const loading = useSelector(state => state.cart.loading);
  const loadingProduct = useSelector(state =>
    state.cart.loadingProduct.reduce((loadProduct, product) => {
      loadProduct[product.id] = product.status;
      return loadProduct;
    }, {})
  );

  /** LIFE CYCLE METHODS */
  useEffect(() => {
    async function getProducts() {
      const {data} = await api.get('products');
      setProducts(data);
      setLoadingProducts(false);
    }
    getProducts();
  }, []);

  /** HANDLE METHODS */
  const handleAdd = useCallback(
    id => {
      if (loading) return;

      dispatch(addToCartRequest(id));
    },
    [loading, dispatch]
  );

  /** RENDER */
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
                onPress={() => handleAdd(product.id)}>
                <AmountContainer>
                  {loadingProduct[product.id] ? (
                    <LoadingButtonIcon size={22} color="#FFF" />
                  ) : (
                    <AddIcon name="add-shopping-cart" size={22} color="#fff" />
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
};

export default Home;
