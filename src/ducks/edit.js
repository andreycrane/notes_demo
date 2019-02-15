// @flow

import type { TAction, TEdit } from '../types';

// Default state
export const defaultState: TEdit = {
  mode: null,
  type: null,
  id: null,
};

// Reducer
export default function reducer(state: TEdit = defaultState, action: TAction) {
  switch (action.type) {
    // do reducer stuff
    default:
      return state;
  }
}
