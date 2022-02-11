import React from 'react';
import ReactDOM from 'react-dom';
import { Pokedex } from './Pokedex';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/reducers';
import thunk from "redux-thunk";
import './styles/styles.css';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Pokedex />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);