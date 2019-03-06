// @flow

import React from 'react';

import type { Node } from 'react';

import ModalWrapper from '../ModalWrapper';
import CategoryForm from './CategoryForm';

import type { TCategory } from '../../../../types';

export type TProps = {
  isOpen: boolean,
  title: string,
  category: TCategory,
  onSave: (category: TCategory) => void,
  onCancel: () => void,
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
