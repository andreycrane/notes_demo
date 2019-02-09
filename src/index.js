// @flow

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import configureStore from './configureStore';
import preloadedState from './example-state';

const store = configureStore(preloadedState);
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
