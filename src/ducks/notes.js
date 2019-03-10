// @flow

import type { TId, TNotes, TNote } from '../types';
import id from '../lib/id';
import { colors } from '../lib/constants';

// Action types
type TCreateNote = $ReadOnly<{|
  type: 'NOTES_CREATE',
  payload: $ReadOnly<{ title: ?string, text: string, color: ?string, category: ?TId }>,
|}>;

type TUpdateNote = $ReadOnly<{|
  type: 'NOTES_UPDATE',
  payload: $ReadOnly<{ id: string, title: ?string, text: string, color: ?string, category: ?TId }>,
|}>;

type TRemoveNote = $ReadOnly<{|
  type: 'NOTES_REMOVE',
  payload: {
    +id: TId,
  },
|}>;

export type TAction =
  | TCreateNote
  | TUpdateNote
  | TRemoveNote;


// Action Creators
export function createNote(
  payload: $ReadOnly<{
    title: ?string,
    text: string,
    color: ?string,
    category: ?TId,
  }>,
): TCreateNote {
  return { type: 'NOTES_CREATE', payload };
}

export function updateNote(
  payload: $ReadOnly<{
    id: string,
    title: ?string,
    text: string,
    color: ?string,
    category: ?TId,
  }>,
): TUpdateNote {
  return { type: 'NOTES_UPDATE', payload };
}

export function removeNote(payload: { +id: TId }): TRemoveNote {
  return { type: 'NOTES_REMOVE', payload };
}

// Default state
export const defaultState: TNotes = [
  {
    id: id(),
    title: 'Voluptas et ut ipsa voluptas error.',
    text: 'Eos eius corporis omnis aut magnam nobis pariatur. Labore cum vel magni ut officia deleniti.',
    color: colors[0],
    category: undefined,
  },
  {
    id: id(),
    title: 'Architecto atque ut sed eum dolores fugiat fugiat iste.',
    text: 'Dolorum rerum consequatur et dignissimos. Sunt pariatur aut eos eos laborum voluptatum facilis quod fugit. ',
    color: colors[0],
    category: undefined,
  },
  {
    id: id(),
    title: 'Labore natus at iure qui quia eveniet quia.',
    text: 'Molestiae voluptates cum quia temporibus blanditiis. Inventore non consequuntur fuga tenetur ut consectetur eos aut.',
    color: colors[0],
    category: undefined,
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
      id: noteId,
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
    const { id: noteId } = action.payload;

    return state.filter((n: TNote): boolean => n.id !== noteId);
  }

  return state;
}
