// @flow

import React from 'react';
import {
  Row,
  Col,
} from 'reactstrap';

import type { Node } from 'react';

import type { TId, TNotes, TNote } from '../../../types';

import Note from './Note';

export type TProps = {
  notes: TNotes,
  remove: (id: TId) => void,
};

export default function NotesList(props: TProps): Node {
  const { notes, remove } = props;

  return (
    <Col
      lg={10}
      className="ml-auto"
    >
      <Row className="pt-3">
        {notes.map((n: TNote): Node => (
          <Col
            md={4}
            key={n.id}
          >
            <Note
              note={n}
              remove={remove}
            />
          </Col>
        ))}
      </Row>
    </Col>
  );
}
