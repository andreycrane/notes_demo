// @flow

import React, {
  useState,
  useEffect,
  useContext,
} from 'react';
import {
  NavbarToggler,
  Navbar,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { IoIosCreate, IoIosSearch } from 'react-icons/io';

import type { Node } from 'react';

import MergeLink from '../MergeLink';
import ApplicationContext from '../ApplicationContext';

export type TProps = {
  searchQuery: string,
  onSearch: (searchQuery: string) => void
};

export function TopBarComponent(props: TProps): Node {
  const { onSearch, searchQuery } = props;
  const [value, setValue] = useState(searchQuery);
  const { toggleSidebar } = useContext(ApplicationContext);

  useEffect((): void => setValue(searchQuery), [searchQuery]);


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
      className="flex-nowrap"
    >
      <NavbarToggler
        className="mr-1"
        onClick={toggleSidebar}
      />
      <div className="d-none d-sm-flex flex-grow-0">
        <Link to="/" className="navbar-brand">
          Notes
        </Link>
      </div>
      <div
        className="flex-grow-1"
      >
        <div className="d-flex flex-row">
          <InputGroup
            className="mr-1 flex-grow-1"
          >
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
                <IoIosSearch />
              </Button>
            </InputGroupAddon>
          </InputGroup>
          <MergeLink
            className="flex-grow-0"
            to={{ pathname: '/notes/create' }}
          >
            <Button className="w-100" color="primary" outline={false}>
              <IoIosCreate />
            </Button>
          </MergeLink>
        </div>
      </div>
    </Navbar>
  );
}

export default React.memo<TProps>(TopBarComponent);
