// @flow

import React from 'react';
import {
  ListGroupItem,
  Button,
} from 'reactstrap';
import {
  IoMdCreate,
  IoMdRemoveCircleOutline,
} from 'react-icons/io';

import type { Node } from 'react';
import type { TId, TCategory } from '../../../types';

export type TProps = {
  category: TCategory,
  edit: (id: TId) => void,
  remove: (id: TId) => void
};

export default function CategoryItem(props: TProps): Node {
  const { category, edit, remove } = props;

  const handleEdit = (): void => edit(category.id);
  const handleRemove = (): void => remove(category.id);

  return (
    <ListGroupItem>
      {category.name}
      <Button
        close
        className="float-right ml-2"
        onClick={handleEdit}
      >
        <IoMdCreate />
      </Button>
      <Button
        close
        className="float-right ml-2"
        onClick={handleRemove}
      >
        <IoMdRemoveCircleOutline />
      </Button>
    </ListGroupItem>
  );
}
