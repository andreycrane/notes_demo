// @flow

import { lorem } from 'faker';

import type { TId, TCategories, TCategory } from '../types';
import id from '../lib/id';

// Action types
type TCreateCategory = $ReadOnly<{|
  type: 'CATEGORIES_CREATE',
  payload: { name: string },
|}>;

type TUpdateCategory = $ReadOnly<{|
  type: 'CATEGORIES_UPDATE',
  payload: { categoryId: string, name: string },
|}>;

type TRemoveCategory = $ReadOnly<{|
  type: 'CATEGORIES_REMOVE',
  payload: { categoryId: TId },
|}>;

export type TAction =
  | TCreateCategory
  | TUpdateCategory
  | TRemoveCategory;


// Action Creators
export function createCategory(payload: { name: string }): TCreateCategory {
  return { type: 'CATEGORIES_CREATE', payload };
}

export function updateCategory(payload: { categoryId: string, name: string }): TUpdateCategory {
  return { type: 'CATEGORIES_UPDATE', payload };
}

export function removeCategory(payload: { categoryId: TId }): TRemoveCategory {
  return { type: 'CATEGORIES_REMOVE', payload };
}


// Default state
export const defaultState: TCategories = [
  {
    id: id(),
    name: lorem.word(),
  },
  {
    id: id(),
    name: lorem.word(),
  },
  {
    id: id(),
    name: lorem.word(),
  },
];


// Reducer
export default function reducer(state: TCategories = defaultState, action: TAction): TCategories {
  if (action.type === 'CATEGORIES_CREATE') {
    return [
      { id: id(), name: action.payload.name },
      ...state,
    ];
  }

  if (action.type === 'CATEGORIES_UPDATE') {
    const { categoryId, name } = action.payload;

    return state.map((c: TCategory): TCategory => {
      if (c.id !== categoryId) {
        return c;
      }

      return { ...c, name };
    });
  }

  if (action.type === 'CATEGORIES_REMOVE') {
    const { categoryId } = action.payload;

    return state.filter((c: TCategory): boolean => c.id !== categoryId);
  }

  return state;
}
