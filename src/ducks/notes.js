// @flow

import type { TAction, TNotes } from '../types';

// Actions
const CREATE = 'notes-demo/notes/CREATE';
const UPDATE = 'notes-demo/notes/UPDATE';
const REMOVE = 'notes-demo/notes/REMOVE';


// Reducer
export default function reducer(state: TNotes = [], action: TAction) {
  switch (action.type) {
    // do reducer stuff
    default:
      return state;
  }
}

// Action Creators
export function createNote(payload: mixed): TAction {
  return { type: CREATE, payload };
}

export function updateWidget(payload: mixed): TAction {
  return { type: UPDATE, payload };
}

export function removeWidget(payload: mixed): TAction {
  return { type: REMOVE, payload };
}
