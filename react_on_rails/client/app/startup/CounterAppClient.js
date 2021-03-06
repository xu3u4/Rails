import React from 'react';
// import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import '../styles/style.scss';
import CountupReducer from '../reducers';
import CountupContainer from '../containers/countup_container';

const stores = createStore(CountupReducer, applyMiddleware(ReduxThunk));

const CounterApp = () => (
  <Provider store={stores}>
    <CountupContainer />
  </Provider>
);

export default CounterApp;
