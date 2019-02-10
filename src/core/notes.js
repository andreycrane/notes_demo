// @flow

import type { TId, TNotes, TNote } from '../types';

import id from '../lib/id';

export function create(
  notes: TNotes,
  title: ?string,
  text: string,
  color: ?string,
  category: ?TId,
): TNotes {
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
  noteId: string,
  title: ?string,
  text: string,
  color: ?string,
  category: ?TId,
): TNotes {
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
  noteId: TId,
): TNotes {
  return notes.filter(n => n.id !== noteId);
}
