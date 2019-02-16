// @flow

import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Input,
  Button,
} from 'reactstrap';

import type { Node } from 'react';

export default function TopBar(): Node {
  return (
    <Navbar
      dark
      fixed="top"
      color="dark"
      expand="md"
    >
      <NavbarBrand href="/">Notes</NavbarBrand>
      <Input
        type="text"
        className="bg-dark text-light mr-2 rounded-0"
      />
      <Button
        color="primary rounded-0"
      >
        New
      </Button>
    </Navbar>
  );
}
