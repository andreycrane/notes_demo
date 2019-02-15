// @flow

import type {
  TId,
  TAction,
  TEdit,
  TEditType,
} from '../types';

// Actions
const EDIT_NEW = 'notes-demo/edit/EDIT_NEW';
const EDIT_EXISTING = 'notes-demo/edit/EDIT_EXISTING';
const CLOSE_EDIT = 'notes-demo/edit/CLOSE_EDIT';

// Action Creators
export function editNew(type: TEditType): TAction {
  return {
    type: EDIT_NEW,
    payload: { type },
  };
}

export function editExisting(type: TEditType, id: TId): TAction {
  return {
    type: EDIT_EXISTING,
    payload: { type, id },
  };
}

export function closeEdit(): TAction {
  return { type: CLOSE_EDIT, payload: {} };
}

// Default state
export const defaultState: TEdit = {
  mode: null,
  type: null,
  id: null,
};

// Reducer
export default function reducer(state: TEdit = defaultState, action: TAction): TEdit {
  const { payload } = action;

  switch (action.type) {
    case EDIT_NEW:
      return {
        type: payload.type,
        mode: 'NEW',
        id: null,
      };
    case EDIT_EXISTING:
      return {
        type: payload.type,
        id: payload.id,
        mode: 'EXISTING',
      };
    case CLOSE_EDIT:
      return {
        type: null,
        mode: null,
        id: null,
      };
    default:
      return state;
  }
}
