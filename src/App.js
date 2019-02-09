// @flow

import React from 'react';
import {
  Container,
  Navbar,
  NavbarBrand,
  Input,
  Row,
  Col,
} from 'reactstrap';

import Bar from './Bar';
import Note from './Note';

export default function App() {
  return (
    <React.Fragment>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Notes</NavbarBrand>
        <Input
          type="text"
          className="w-100"
        />
      </Navbar>
      <Container fluid>
        <Row>
          <Col lg={2}>
            <Bar />
          </Col>
          <Col lg={10}>
            <Row>
              <Col md={4}>
                <Note />
              </Col>
              <Col md={4}>
                <Note />
              </Col>
              <Col md={4}>
                <Note />
              </Col>
              <Col md={4}>
                <Note />
              </Col>
              <Col md={4}>
                <Note />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
