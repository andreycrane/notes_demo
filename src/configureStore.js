// @flow

import { createStore, combineReducers } from 'redux';
import type { Dispatch } from 'redux';

import type { TState, TAction } from './types';

import notesReducer from './ducks/notes';
import categoriesReducer from './ducks/categories';

const rootReducer = combineReducers({
  notes: notesReducer,
  categories: categoriesReducer,
});

export default function configureStore(preloadedState: TState) {
  const store = createStore<TState, TAction, Dispatch<TAction>>(
    rootReducer,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}
