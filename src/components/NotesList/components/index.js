// @flow

import React from 'react';
import {
  Row,
  Col,
} from 'reactstrap';

import type { Node } from 'react';

import Note from './Note';

export default function NotesList(): Node {
  return (
    <Col
      lg={10}
      className="ml-auto"
    >
      <Row className="pt-3">
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
  );
}
