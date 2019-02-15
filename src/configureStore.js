// @flow

import { createStore, combineReducers } from 'redux';
import type { Store, Dispatch } from 'redux';

import type { TState, TAction } from './types';

import notesReducer from './ducks/notes';
import categoriesReducer from './ducks/categories';
import editReducer from './ducks/edit';

const rootReducer = combineReducers({
  notes: notesReducer,
  categories: categoriesReducer,
  edit: editReducer,
});

type AppStore = Store<TState, TAction, Dispatch<TAction>>;

export default function configureStore(preloadedState: TState): AppStore {
  const store = createStore<TState, TAction, Dispatch<TAction>>(
    rootReducer,
    preloadedState,
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
}
