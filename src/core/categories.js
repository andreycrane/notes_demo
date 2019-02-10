// @flow

import type { TId, TCategories, TCategory } from '../types';

import id from '../lib/id';


export function create(
  categories: TCategories,
  payload: {
    name: string
  },
): TCategories {
  const { name } = payload;

  return [
    {
      id: id(),
      name,
    },
    ...categories,
  ];
}


export function update(
  categories: TCategories,
  payload: {
    categoryId: TId,
    name: string,
  },
): TCategories {
  const { categoryId, name } = payload;

  return categories.map((c: TCategory): TCategory => {
    if (c.id !== categoryId) {
      return c;
    }

    return { ...c, name };
  });
}


export function remove(
  categories: TCategories,
  payload: {
    categoryId: TId,
  },
): TCategories {
  const { categoryId } = payload;

  return categories.filter(c => c.id !== categoryId);
}
