// @flow

import React from 'react';
import {
  Container,
  Row,
} from 'reactstrap';

import type { Node } from 'react';

import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import NotesList from './components/NotesList';
import EditModal from './components/EditModal';

export default function App(): Node {
  const style = {
    paddingTop: '56px',
  };

  return (
    <React.Fragment>
      <TopBar />
      <Container fluid>
        <Row
          role="main"
          style={style}
        >
          <Sidebar />
          <NotesList />
          <EditModal isOpen />
        </Row>
      </Container>
    </React.Fragment>
  );
}
