// @flow

import React from 'react';
import type { Node } from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  ListGroup,
  Button,
} from 'reactstrap';
import { IoMdAddCircleOutline } from 'react-icons/io';

import CategoryItem from './CategoryItem';

import type {
  TCategories,
  TCategory,
  TId,
} from '../../../types';

export type TProps = {
  categories: TCategories,
  add: () => void,
  edit: (id: TId) => void,
  remove: (id: TId) => void
};

export default function Sidebar(props: TProps): Node {
  const {
    categories,
    edit,
    remove,
    add,
  } = props;

  const style = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    zIndex: 100,
    padding: '60px 0 0',
    boxShadow: 'inset -1px 0 0 rgba(0, 0, 0, .1)',
  };

  return (
    <Col
      lg={2}
      style={style}
      className="px-2"
    >
      <h4>
        Categories
        <Button
          close
          className="float-right"
          onClick={add}
        >
          <Link to="/categories/create">
            <IoMdAddCircleOutline />
          </Link>
        </Button>
      </h4>
      <ListGroup>
        {categories.map((c: TCategory): Node => (
          <CategoryItem
            key={c.id}
            category={c}
            edit={edit}
            remove={remove}
          />
        ))}
      </ListGroup>
    </Col>
  );
}
