// @flow

import React from 'react';
import { connect } from 'react-redux';

import type { Node } from 'react';

import CategoryModal from './components/CategoryModal';

export function EditModal(): Node {
  return (
    <CategoryModal
      isOpen
      title="Hey"
      category={{ id: 'eba', name: 'test' }}
      onSave={(...rest): void => console.log(rest)}
      onCancel={(...rest): void => console.log(rest)}
    />
  );
}


export default connect()(EditModal);
