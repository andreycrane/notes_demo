// @flow

import type { TState } from './types';

import { defaultState as noteState } from './ducks/notes';
import { defaultState as categoriesState } from './ducks/categories';
import { defaultState as editState } from './ducks/edit';

const exampleState: TState = {
  notes: noteState,
  categories: categoriesState,
  edit: editState,
};

export default exampleState;
