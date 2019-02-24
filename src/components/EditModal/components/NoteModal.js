// @flow

import React from 'react';

import type { Node } from 'react';
import type { TNote } from '../../../types';

import ModalWrapper from './ModalWrapper';
import NoteForm from './NoteForm';

export type TProps = {
  title: string,
  isOpen: boolean,
  note: TNote,
  onSave: (note: TNote) => void,
  onCancel: () => void
};

export default function NoteModal(props: TProps): Node {
  const {
    title,
    isOpen,
    note,
    onSave,
    onCancel,
  } = props;

  return (
    <ModalWrapper
      title={title}
      isOpen={isOpen}
    >
      <NoteForm
        note={note}
        onSave={onSave}
        onCancel={onCancel}
      />
    </ModalWrapper>
  );
}
