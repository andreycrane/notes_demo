// @flow

import React from 'react';
import {
  ListGroupItem,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import {
  IoMdCreate,
  IoMdRemoveCircleOutline,
} from 'react-icons/io';

import type { Node } from 'react';
import type { TId, TCategory } from '../../../types';

export type TProps = {
  category: TCategory,
  remove: (id: TId) => void
};

export default function CategoryItem(props: TProps): Node {
  const { category, remove } = props;

  const handleRemove = (): void => remove(category.id);

  return (
    <ListGroupItem>
      {category.name}
      <Button
        close
        className="float-right ml-2"
      >
        <Link to={`/categories/edit/${category.id}`}>
          <IoMdCreate />
        </Link>
      </Button>
      <Button
        close
        className="js-remove-btn float-right ml-2"
        onClick={handleRemove}
      >
        <IoMdRemoveCircleOutline />
      </Button>
    </ListGroupItem>
  );
}
