// @flow

import { createStore } from 'redux';
import type { Dispatch } from 'redux';

import type { TState, TAction } from './types';

const defaultState: TState = {
  notes: [],
  categories: [],
};

function rootReducer(state: TState = defaultState): TState {
  return state;
}

export default function configureStore(preloadedState: TState) {
  const store = createStore<TState, TAction, Dispatch<TAction>>(rootReducer, preloadedState);

  return store;
}
