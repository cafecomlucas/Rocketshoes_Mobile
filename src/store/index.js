import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './modules/rootReducers';
import sagas from './modules/rootSagas';

const sagaMiddleware = createSagaMiddleware();

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware);

const store = createStore(reducers, enhancer);

sagaMiddleware.run(sagas);

export default store;
