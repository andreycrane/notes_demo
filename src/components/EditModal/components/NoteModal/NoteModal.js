// @flow

import React from 'react';

import type { Node } from 'react';
import type { TNote, TCategories } from '../../../../types';

import ModalWrapper from '../ModalWrapper';
import NoteForm from './NoteForm';

export type TProps = {
  isOpen: boolean,
  title: string,
  note: TNote,
  categories: TCategories,
  onSave: (note: TNote) => void,
  onCancel: () => void
};

export default function NoteModal(props: TProps): Node {
  const {
    title,
    note,
    categories,
    onSave,
    onCancel,
    isOpen,
  } = props;

  return (
    <ModalWrapper
      title={title}
      isOpen={isOpen}
    >
      <NoteForm
        note={note}
        categories={categories}
        onSave={onSave}
        onCancel={onCancel}
      />
    </ModalWrapper>
  );
}
