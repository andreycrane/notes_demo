// @flow

import { lorem, internet } from 'faker';

import type { TState } from './types';
import id from './lib/id';


const exampleState: TState = {
  notes: [
    {
      id: id(),
      title: lorem.sentence(),
      text: lorem.text(),
      color: internet.color(),
      category: null,
    },
    {
      id: id(),
      title: lorem.sentence(),
      text: lorem.text(),
      color: internet.color(),
      category: null,
    },
    {
      id: id(),
      title: lorem.sentence(),
      text: lorem.text(),
      color: internet.color(),
      category: null,
    },
  ],
  categories: [
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
  ],
};

export default exampleState;
