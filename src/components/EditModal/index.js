// @flow

import React from 'react';
import { connect } from 'react-redux';

import type { Node } from 'react';

import CategoryModal from './components/CategoryModal';
import NoteModal from './components/NoteModal';
import {
  defaultState as categories,
} from '../../ducks/categories';

export function EditModal(): Node {
  return (
    <NoteModal
      isOpen
      title="Hey"
      note={{
        id: 'eba',
        title: 'test',
        text: 'test-test',
        color: '#ffffff',
        category: undefined,
      }}
      categories={categories}
      onSave={(...rest): void => console.log(rest)}
      onCancel={(...rest): void => console.log(rest)}
    />
  );
}


export default connect()(EditModal);
