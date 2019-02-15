// @flow

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import configureStore from './configureStore';
import defaultState from './default-state';

const store = configureStore(defaultState);
const rootDiv = document.createElement('div');

if (document.body && rootDiv) {
  document.body.appendChild(rootDiv);
  render(
    (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    rootDiv,
  );
}
