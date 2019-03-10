// @flow

import React, { useState, useEffect } from 'react';
import {
  Collapse,
  NavbarToggler,
  Navbar,
  Form,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
  Row,
  Col,
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
  const [isOpen, toggleOpen] = useState(false);

  useEffect((): void => setValue(searchQuery), [searchQuery]);

  function onChangeHandler(event) {
    setValue(event.target.value);
  }

  function onSearchHandler() {
    onSearch(value);
  }

  function toggle() {
    toggleOpen(!isOpen);
  }

  return (
    <Navbar
      dark
      fixed="top"
      color="dark"
      expand="md"
    >
      <Link to="/" className="navbar-brand">
        Notes
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Form className="w-100 my-2 my-md-0 my-lg-0">
          <Row>
            <Col lg={11} md={10} xs={12} sm={12} className="pr-md-0 mb-2 mb-md-0">
              <InputGroup>
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
            </Col>
            <Col lg={1} md={2} xs={12} sm={12}>
              <Link to="/notes/create">
                <Button className="w-100" color="primary" outline={false}>
                    New
                </Button>
              </Link>
            </Col>
          </Row>
        </Form>
      </Collapse>
    </Navbar>
  );
}
