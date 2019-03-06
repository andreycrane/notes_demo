// @flow

import type { TState } from './types';

import { defaultState as noteState } from './ducks/notes';
import { defaultState as categoriesState } from './ducks/categories';

const exampleState: TState = {
  notes: noteState,
  categories: categoriesState,
};

export default exampleState;
