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

import MergeLink from '../../MergeLink';

export type TProps = {
  active: boolean,
  category: TCategory,
  remove: (id: TId) => void
};

export default function CategoryItem(props: TProps): Node {
  const { active, category, remove } = props;

  const handleRemove = (): void => remove(category.id);

  return (
    <ListGroupItem
      active={active}
      action
    >
      <MergeLink
        to={{ search: `?category=${category.id}` }}
        className={active ? 'text-white' : ''}
      >
        {category.name}
      </MergeLink>
      <Button
        close
        className="float-right ml-2"
      >
        <MergeLink to={{ pathname: `/categories/edit/${category.id}` }}>
          <IoMdCreate
            style={{ color: 'black' }}
          />
        </MergeLink>
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
