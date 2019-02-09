// @flow

import { createStore } from 'redux';

import type { TState } from './types';

function rootReducer(state) {
  return state;
}

export default function configureStore(preloadedState: TState) {
  const store = createStore(rootReducer, preloadedState);

  return store;
}
