import {produce} from 'immer';

export default function cart(
  state = {
    products: [],
  },
  action
) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, draft => {
        const {product} = action;
        const productIndex = draft.products.findIndex(p => p.id === product.id);

        if (productIndex >= 0) {
          draft.products[productIndex].amount += 1;
        } else {
          draft.products.push({
            ...product,
            amount: 1,
          });
        }
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.products.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft.products.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT': {
      return produce(state, draft => {
        if (action.amount <= 0) return;
        const productIndex = draft.products.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft.products[productIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
