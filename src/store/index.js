import {createStore} from 'redux';

import reducers from './modules/rootReducers';

const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

export default createStore(reducers, enhancer);
