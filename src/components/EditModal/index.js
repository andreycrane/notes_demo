// @flow

import React from 'react';
import { Route } from 'react-router-dom';

import type { Node } from 'react';

import CategoryModal from './components/CategoryModal';
import NoteModal from './components/NoteModal';

export default function EditModal(): Node {
  return (
    <React.Fragment>
      <Route
        path="/categories/:mode(edit)/:categoryId"
        component={CategoryModal}
      />
      <Route
        path="/categories/:mode(create)"
        component={CategoryModal}
      />
      <Route
        path="/notes/edit/:categoryId"
        component={NoteModal}
      />
    </React.Fragment>
  );
}