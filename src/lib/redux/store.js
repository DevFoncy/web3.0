import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import cart from './ducks/shoppingCart';

const persistConfig = {
  key: 'root',
  storage,
};

// initial states here
const initalState = {};

// middleware
const middleware = [thunk];

const rootReducer = combineReducers({
  cart,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// creating store
export const store = createStore(
  persistedReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

export const persistor = persistStore(store);
