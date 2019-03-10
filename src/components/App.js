// @flow

import React, {
  useState,
  useMemo,
} from 'react';
import {
  Container,
  Row,
} from 'reactstrap';

import type { Node } from 'react';

import ApplicationContext from './ApplicationContext';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import NotesList from './NotesList';
import EditModal from './EditModal';

import type { TApplicationContext } from './ApplicationContext';

export default function App(): Node {
  const style = {
    paddingTop: '56px',
  };

  const [isSidebarOpen, setToggle] = useState(false);

  const value = useMemo(
    (): TApplicationContext => ({
      isSidebarOpen,
      toggleSidebar() { setToggle(!isSidebarOpen); },
    }),
    [isSidebarOpen, setToggle],
  );

  return (
    <React.Fragment>
      <ApplicationContext.Provider value={value}>
        <TopBar />
        <Container fluid>
          <Row
            role="main"
            style={style}
          >
            <Sidebar />
            <NotesList />
            <EditModal />
          </Row>
        </Container>
      </ApplicationContext.Provider>
    </React.Fragment>
  );
}
