// @flow

import { lorem } from 'faker';

import type { TId, TAction, TCategories } from '../types';
import id from '../lib/id';

// Actions
const CREATE = 'notes-demo/categories/CREATE';
const UPDATE = 'notes-demo/categories/UPDATE';
const REMOVE = 'notes-demo/categories/REMOVE';


// Action Creators
export function createCategory(
  payload: {
    name: string,
  },
): TAction {
  return { type: CREATE, payload };
}

export function updateCategory(
  payload: {
    categoryId: string,
    name: string
  },
): TAction {
  return { type: UPDATE, payload };
}

export function removeCategory(
  payload: {
    categoryId: TId,
  },
): TAction {
  return { type: REMOVE, payload };
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
export default function reducer(state: TCategories = defaultState, action: TAction) {
  switch (action.type) {
    // do reducer stuff
    default:
      return state;
  }
}
