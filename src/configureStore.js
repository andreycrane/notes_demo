// @flow

import { createStore, combineReducers } from 'redux';
import type { Store, Dispatch } from 'redux';

import type { TState } from './types';
import type { TAction as TCategoryAction } from './ducks/categories';
import type { TAction as TNotesAction } from './ducks/notes';


import notesReducer from './ducks/notes';
import categoriesReducer from './ducks/categories';


type TAction =
  | TCategoryAction
  | TNotesAction;

const rootReducer = combineReducers({
  notes: notesReducer,
  categories: categoriesReducer,
});

type AppStore = Store<TState, TAction, Dispatch<TAction>>;

export default function configureStore(preloadedState: TState | void): AppStore {
  const store = createStore<TState, TAction, Dispatch<TAction>>(
    rootReducer,
    preloadedState,
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
}
