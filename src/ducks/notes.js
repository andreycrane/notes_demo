// @flow

import { lorem, internet } from 'faker';

import type { TId, TAction, TNotes } from '../types';
import id from '../lib/id';

// Actions
const CREATE = 'notes-demo/notes/CREATE';
const UPDATE = 'notes-demo/notes/UPDATE';
const REMOVE = 'notes-demo/notes/REMOVE';

// Action Creators
export function createNote(
  payload: {
    title: ?string,
    text: string,
    color: ?string,
    category: ?TId,
  },
): TAction {
  return { type: CREATE, payload };
}

export function updateNote(
  payload: {
    noteId: string,
    title: ?string,
    text: string,
    color: ?string,
    category: ?TId,
  },
): TAction {
  return { type: UPDATE, payload };
}

export function removeNote(
  payload: {
    noteId: TId,
  },
): TAction {
  return { type: REMOVE, payload };
}

// Default state
export const defaultState: TNotes = [
  {
    id: id(),
    title: lorem.sentence(),
    text: lorem.text(),
    color: internet.color(),
    category: null,
  },
  {
    id: id(),
    title: lorem.sentence(),
    text: lorem.text(),
    color: internet.color(),
    category: null,
  },
  {
    id: id(),
    title: lorem.sentence(),
    text: lorem.text(),
    color: internet.color(),
    category: null,
  },
];

// Reducer
export default function reducer(state: TNotes = defaultState, action: TAction) {
  switch (action.type) {
    // do reducer stuff
    default:
      return state;
  }
}
