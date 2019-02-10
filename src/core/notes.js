// @flow

import type { TId, TNotes, TNote } from '../types';

import id from '../lib/id';

export function create(
  notes: TNotes,
  payload: {
    title: ?string,
    text: string,
    color: ?string,
    category: ?TId,
  },
): TNotes {
  const {
    title,
    text,
    color,
    category,
  } = payload;

  return [
    {
      id: id(),
      title,
      text,
      color,
      category,
    },
    ...notes,
  ];
}


export function update(
  notes: TNotes,
  payload: {
    noteId: string,
    title: ?string,
    text: string,
    color: ?string,
    category: ?TId,
  },
): TNotes {
  const {
    noteId,
    title,
    text,
    color,
    category,
  } = payload;

  return notes.map((n: TNote): TNote => {
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


export function remove(
  notes: TNotes,
  payload: {
    noteId: TId,
  },
): TNotes {
  const { noteId } = payload;

  return notes.filter(n => n.id !== noteId);
}
