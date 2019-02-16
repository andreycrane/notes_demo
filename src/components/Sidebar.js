// @flow

import React from 'react';
import {
  Col,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

import type { Node } from 'react';

export default function Sidebar(): Node {
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
      <h4>Categories</h4>
      <ListGroup>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
    </Col>
  );
}
