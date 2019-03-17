// @flow

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import configureStore from './configureStore';
import { loadState, saveState } from './localStorage';

const preloadState = loadState();
const store = configureStore(preloadState);

store.subscribe(() => {
  saveState(store.getState());
});

const rootDiv = document.createElement('div');

if (document.body && rootDiv) {
  document.body.appendChild(rootDiv);
  render(
    (
      <Provider store={store}>
        <BrowserRouter basename="/">
          <App />
        </BrowserRouter>
      </Provider>
    ),
    rootDiv,
  );
}
