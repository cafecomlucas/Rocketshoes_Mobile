import {Alert} from 'react-native';
import {call, put, all, select, takeLatest} from 'redux-saga/effects';
import api from '../../../services/api';

import {addToCartSuccess, updateAmount} from './actions';

function* addToCartSaga(action) {
  const {id} = action;

  const productExists = yield select(state =>
    state.cart.products.find(p => p.id === id)
  );
  const currentAmount = productExists ? productExists.amount : 0;

  const nextAmount = currentAmount + 1;

  const {
    data: {amount: stockAmount},
  } = yield call(api.get, `/stock/${id}`);

  if (nextAmount > stockAmount) {
    Alert.alert('Atenção', 'Quantidade indisponível');
    return;
  }

  if (productExists) {
    yield put(updateAmount(id, nextAmount));
  } else {
    const {data} = yield call(api.get, `/products/${id}`);
    const product = {
      ...data,
      amount: 1,
    };
    yield put(addToCartSuccess(product));
  }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCartSaga)]);
