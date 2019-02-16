// @flow

import type {
  TId,
  TEdit,
  TEditType,
} from '../types';


// Action types
type TEditNew = $ReadOnly<{|
  type: 'EDIT_NEW',
  payload: { type: TEditType },
|}>;

type TEditExistsing = $ReadOnly<{|
  type: 'EDIT_EXISTING',
  payload: { type: TEditType, id: TId },
|}>;

type TCloseEdit = $ReadOnly<{|
  type: 'CLOSE_EDIT',
  payload: {},
|}>;

export type TAction =
  | TEditNew
  | TEditExistsing
  | TCloseEdit;


// Action Creators
export function editNew(type: TEditType): TEditNew {
  return { type: 'EDIT_NEW', payload: { type } };
}

export function editExisting(type: TEditType, id: TId): TEditExistsing {
  return { type: 'EDIT_EXISTING', payload: { type, id } };
}

export function closeEdit(): TCloseEdit {
  return { type: 'CLOSE_EDIT', payload: {} };
}

// Default state
export const defaultState: TEdit = {
  mode: null,
  type: null,
  id: null,
};

// Reducer
export default function reducer(state: TEdit = defaultState, action: TAction): TEdit {
  switch (action.type) {
    case 'EDIT_NEW':
      return {
        type: action.payload.type,
        mode: 'NEW',
        id: null,
      };
    case 'EDIT_EXISTING':
      return {
        type: action.payload.type,
        id: action.payload.id,
        mode: 'EXISTING',
      };
    case 'CLOSE_EDIT':
      return {
        type: null,
        mode: null,
        id: null,
      };
    default:
      return state;
  }
}
