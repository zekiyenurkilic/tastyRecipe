import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducer';

const initialState = {};

const middleware = [thunk, logger];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware),
);
export default store;
