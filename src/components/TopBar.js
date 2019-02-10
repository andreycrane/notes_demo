// @flow

import React from 'react';

import {
  Navbar,
  NavbarBrand,
  Input,
  Button,
} from 'reactstrap';

export default function TopBar() {
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
        className="bg-dark text-light mr-2"
      />
      <Button
        color="primary"
      >
        New
      </Button>
    </Navbar>
  );
}