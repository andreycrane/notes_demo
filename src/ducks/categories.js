// @flow

import type { TId, TCategories, TCategory } from '../types';
import genId from '../lib/id';

// Action types
type TCreateCategory = $ReadOnly<{|
  type: 'CATEGORIES_CREATE',
  payload: $ReadOnly<{ name: string }>,
|}>;

type TUpdateCategory = $ReadOnly<{|
  type: 'CATEGORIES_UPDATE',
  payload: $ReadOnly<{ id: string, name: string }>,
|}>;

type TRemoveCategory = $ReadOnly<{|
  type: 'CATEGORIES_REMOVE',
  payload: { id: TId },
|}>;

export type TAction =
  | TCreateCategory
  | TUpdateCategory
  | TRemoveCategory;


// Action Creators
export function createCategory(payload: { +name: string }): TCreateCategory {
  return { type: 'CATEGORIES_CREATE', payload };
}

export function updateCategory(payload: { +id: string, +name: string }): TUpdateCategory {
  return { type: 'CATEGORIES_UPDATE', payload };
}

export function removeCategory(payload: { id: TId }): TRemoveCategory {
  return { type: 'CATEGORIES_REMOVE', payload };
}


// Default state
export const defaultState: TCategories = [
  {
    id: genId(),
    name: 'voluptatem',
  },
  {
    id: genId(),
    name: 'minus',
  },
  {
    id: genId(),
    name: 'quod',
  },
];


// Reducer
export default function reducer(state: TCategories = defaultState, action: TAction): TCategories {
  if (action.type === 'CATEGORIES_CREATE') {
    return [
      { id: genId(), name: action.payload.name },
      ...state,
    ];
  }

  if (action.type === 'CATEGORIES_UPDATE') {
    const { id, name } = action.payload;

    return state.map((c: TCategory): TCategory => {
      if (c.id !== id) {
        return c;
      }

      return { ...c, name };
    });
  }

  if (action.type === 'CATEGORIES_REMOVE') {
    const { id } = action.payload;

    return state.filter((c: TCategory): boolean => c.id !== id);
  }

  return state;
}
