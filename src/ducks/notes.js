// @flow

import { lorem, internet } from 'faker';

import type { TId, TNotes } from '../types';
import { create, update, remove } from '../core/notes';
import id from '../lib/id';

// Action types
type TCreateNote = $ReadOnly<{|
  type: 'CREATE',
  payload: { title: ?string, text: string, color: ?string, category: ?TId },
|}>;

type TUpdateNote = $ReadOnly<{|
  type: 'UPDATE',
  payload: { noteId: string, title: ?string, text: string, color: ?string, category: ?TId },
|}>;

type TRemoveNote = $ReadOnly<{|
  type: 'REMOVE',
  payload: {
    noteId: TId,
  },
|}>;

export type TAction =
  | TCreateNote
  | TUpdateNote
  | TRemoveNote;


// Action Creators
export function createNote(
  payload: {
    title: ?string,
    text: string,
    color: ?string,
    category: ?TId,
  },
): TCreateNote {
  return { type: 'CREATE', payload };
}

export function updateNote(
  payload: {
    noteId: string,
    title: ?string,
    text: string,
    color: ?string,
    category: ?TId,
  },
): TUpdateNote {
  return { type: 'UPDATE', payload };
}

export function removeNote(payload: { noteId: TId }): TRemoveNote {
  return { type: 'REMOVE', payload };
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
export default function reducer(state: TNotes = defaultState, action: TAction): TNotes {
  switch (action.type) {
    case 'CREATE':
      return create(state, action.payload);
    case 'UPDATE':
      return update(state, action.payload);
    case 'REMOVE':
      return remove(state, action.payload);
    default:
      return state;
  }
}
