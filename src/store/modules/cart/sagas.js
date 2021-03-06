import {Alert} from 'react-native';
import {call, put, all, select, takeLatest} from 'redux-saga/effects';
import api from '../../../services/api';

import {addToCartSuccess, updateAmountSuccess, updateLoading} from './actions';

function* addToCartSaga(action) {
  const {id} = action;

  yield put(updateLoading(id, true));

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
    yield put(updateLoading(id, false));
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, nextAmount));
  } else {
    const {data} = yield call(api.get, `/products/${id}`);
    const product = {
      ...data,
      amount: 1,
    };
    yield put(addToCartSuccess(product));
  }
  yield put(updateLoading(id, false));
}

function* updateAmountSaga(action) {
  const {id, amount: nextAmount} = action;
  if (nextAmount <= 0) return;
  yield put(updateLoading(id, true));

  const {
    data: {amount: stockAmount},
  } = yield call(api.get, `/stock/${id}`);

  if (nextAmount > stockAmount) {
    Alert.alert('Atenção', 'Quantidade indisponível');
    yield put(updateLoading(id, false));
    return;
  }
  yield put(updateAmountSuccess(id, nextAmount));
  yield put(updateLoading(id, false));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCartSaga),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmountSaga),
]);
