// @flow

import React, { useContext } from 'react';
import type { Node } from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  ListGroup,
  Button,
} from 'reactstrap';
import { IoMdAddCircleOutline } from 'react-icons/io';

import ApplicationContext from '../../ApplicationContext';
import CategoryItem from './CategoryItem';

import type {
  TCategories,
  TCategory,
  TId,
} from '../../../types';

import '../styles/index.css';

export type TProps = {
  active: ?TId,
  categories: TCategories,
  remove: (id: TId) => void
};

export function SidebarComponent(props: TProps): Node {
  const { active, categories, remove } = props;
  const { isSidebarOpen } = useContext(ApplicationContext);

  return (
    <Col
      lg={2}
      md={4}
      className={`sidebar px-2 ${isSidebarOpen ? 'show' : ''}`}
    >
      <h4>
        Categories
        <Button
          close
          className="float-right"
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
            remove={remove}
            active={active === c.id}
          />
        ))}
      </ListGroup>
    </Col>
  );
}

export default React.memo<TProps>(SidebarComponent);
