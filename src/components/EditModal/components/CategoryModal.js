// @flow

import React from 'react';


import type { Node } from 'react';
import type { TCategory } from '../../../types';

import ModalWrapper from './ModalWrapper';
import CategoryForm from './CategoryForm';

export type TProps = {
  title: string,
  isOpen: boolean,
  category: TCategory,
  onSave: (category: TCategory) => void,
  onCancel: () => void
};

export default function CategoryModal(props: TProps): Node {
  const {
    title,
    isOpen,
    category,
    onSave,
    onCancel,
  } = props;

  return (
    <ModalWrapper
      title={title}
      isOpen={isOpen}
    >
      <CategoryForm
        category={category}
        onSave={onSave}
        onCancel={onCancel}
      />
    </ModalWrapper>
  );
}
