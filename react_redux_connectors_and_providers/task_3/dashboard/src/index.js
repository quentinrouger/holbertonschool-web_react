// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './App/App';
import { uiReducer } from './reducers/uiReducer';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Create the Redux store
const store = createStore(
  uiReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
