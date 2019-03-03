// @flow

import React, { useState } from 'react';
import {
  Navbar,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import type { Node } from 'react';

export type TProps = {
  searchQuery: string,
  onSearch: (searchQuery: string) => void
};


export default function TopBar(props: TProps): Node {
  const { onSearch, searchQuery } = props;
  const [value, setValue] = useState(searchQuery);

  function onChangeHandler(event) {
    setValue(event.target.value);
  }

  function onSearchHandler() {
    onSearch(value);
  }

  return (
    <Navbar
      dark
      fixed="top"
      color="dark"
      expand="md"
    >
      <Link
        to="/"
        className="navbar-brand"
      >
        Notes
      </Link>
      <InputGroup className="mr-2">
        <Input
          onChange={onChangeHandler}
          value={value}
          className="bg-dark text-light js-search-input"
        />
        <InputGroupAddon addonType="append">
          <Button
            onClick={onSearchHandler}
            className="js-search-btn"
          >
            Search
          </Button>
        </InputGroupAddon>
      </InputGroup>
      <Link to="/notes/create">
        <Button
          color="primary"
          outline={false}
        >
            New
        </Button>
      </Link>
    </Navbar>
  );
}
