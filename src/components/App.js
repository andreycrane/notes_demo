// @flow

import React from 'react';
import {
  Container,
  Row,
} from 'reactstrap';

import type { Node } from 'react';

import Sidebar from './Sidebar';
import TopBar from './TopBar';
import NotesList from './NotesList';

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
        </Row>
      </Container>
    </React.Fragment>
  );
}
