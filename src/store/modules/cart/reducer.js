import {produce} from 'immer';

export default function cart(
  state = {
    products: [],
    loading: [],
  },
  action
) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        draft.products.push(action.product);
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.products.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft.products.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, draft => {
        const productIndex = draft.products.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft.products[productIndex].amount = Number(action.amount);
        }
      });
    }
    case '@cart/UPDATE_LOADING': {
      return produce(state, draft => {
        const {id, status} = action;
        const productIndex = draft.loading.findIndex(p => p.id === id);

        if (productIndex >= 0) {
          draft.loading[productIndex].status = status;
        } else {
          draft.loading.push({id, status});
        }
      });
    }
    default:
      return state;
  }
}
