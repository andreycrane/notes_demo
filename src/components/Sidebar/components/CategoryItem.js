// @flow

import React from 'react';
import {
  ListGroupItem,
  Button,
} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import {
  IoMdCreate,
  IoMdRemoveCircleOutline,
} from 'react-icons/io';

import type { Node } from 'react';
import type { TId, TCategory } from '../../../types';

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
      <NavLink
        to={{ pathname: '/', search: `?category=${category.id}` }}
        activeClassName="text-white"
        isActive={(): boolean => active}
      >
        {category.name}
      </NavLink>
      <Button
        close
        className="float-right ml-2"
      >
        <Link to={`/categories/edit/${category.id}`}>
          <IoMdCreate
            style={{ color: 'black' }}
          />
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
