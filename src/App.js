// @flow

import React from 'react';
import {
  Container,
  Row,
} from 'reactstrap';

import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import NotesList from './components/NotesList';

export default function App() {
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
