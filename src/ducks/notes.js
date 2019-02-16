// @flow

import { lorem, internet } from 'faker';

import type { TId, TNotes, TNote } from '../types';
import id from '../lib/id';

// Action types
type TCreateNote = $ReadOnly<{|
  type: 'NOTES_CREATE',
  payload: { title: ?string, text: string, color: ?string, category: ?TId },
|}>;

type TUpdateNote = $ReadOnly<{|
  type: 'NOTES_UPDATE',
  payload: { noteId: string, title: ?string, text: string, color: ?string, category: ?TId },
|}>;

type TRemoveNote = $ReadOnly<{|
  type: 'NOTES_REMOVE',
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
  return { type: 'NOTES_CREATE', payload };
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
  return { type: 'NOTES_UPDATE', payload };
}

export function removeNote(payload: { noteId: TId }): TRemoveNote {
  return { type: 'NOTES_REMOVE', payload };
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
  if (action.type === 'NOTES_CREATE') {
    const {
      title, text, color, category,
    } = action.payload;

    return [
      {
        id: id(),
        title,
        text,
        color,
        category,
      },
      ...state,
    ];
  }

  if (action.type === 'NOTES_UPDATE') {
    const {
      noteId,
      title,
      text,
      color,
      category,
    } = action.payload;

    return state.map((n: TNote): TNote => {
      if (n.id !== noteId) {
        return n;
      }

      return {
        ...n,
        title,
        text,
        color,
        category,
      };
    });
  }

  if (action.type === 'NOTES_REMOVE') {
    const { noteId } = action.payload;

    return state.filter((n: TNote): boolean => n.id !== noteId);
  }

  return state;
}
