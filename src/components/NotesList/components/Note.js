// @flow

import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from 'reactstrap';
import {
  IoMdCreate,
  IoMdRemoveCircleOutline,
} from 'react-icons/io';
import type { Node } from 'react';

import type { TId, TNote } from '../../../types';

export type TProps = {
  note: TNote,
  edit: (id: TId) => void,
  remove: (id: TId) => void,
};

export default function Note(props: TProps): Node {
  const { note, edit, remove } = props;

  const removeHandler = (): void => remove(note.id);
  const editHandler = (): void => edit(note.id);

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">
          {note.title}
        </CardTitle>
        <CardText>
          {note.text}
        </CardText>
        <Button
          close
          className="float-right ml-2"
          onClick={editHandler}
        >
          <IoMdCreate />
        </Button>
        <Button
          close
          className="float-right ml-2"
          onClick={removeHandler}
        >
          <IoMdRemoveCircleOutline />
        </Button>
      </CardBody>
    </Card>
  );
}
