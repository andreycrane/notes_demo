// @flow

import React from 'react';

import {
  Col,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default function Sidebar() {
  const style = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    zIndex: 100,
    padding: '56px 0 0',
    boxShadow: 'inset -1px 0 0 rgba(0, 0, 0, .1)',
  };

  return (
    <Col
      lg={2}
      style={style}
    >
      <p>List Based</p>
      <Nav vertical>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem>
      </Nav>
      <hr />
      <p>Link based</p>
      <Nav vertical>
        <NavLink href="#">Link</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink href="#">Another Link</NavLink>
        <NavLink disabled href="#">Disabled Link</NavLink>
      </Nav>
    </Col>
  );
}
