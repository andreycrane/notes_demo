// @flow

import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Badge,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import {
  IoMdCreate,
  IoMdRemoveCircleOutline,
} from 'react-icons/io';
import type { Node } from 'react';

import type { TId, TNote, TCategory } from '../../../types';

export type TProps = {
  note: TNote,
  category: ?TCategory,
  remove: (id: TId) => void,
};

export default function Note(props: TProps): Node {
  const { note, category, remove } = props;

  const removeHandler = (): void => remove(note.id);

  return (
    <Card style={{ backgroundColor: note.color }}>
      <CardBody>
        <CardTitle tag="h5">
          {note.title}
        </CardTitle>
        <CardText>
          {note.text}
        </CardText>
        {category && (<Badge color="info">{category.name}</Badge>)}
        <Button
          close
          className="float-right ml-2"
        >
          <Link to={`/notes/edit/${note.id}`}>
            <IoMdCreate />
          </Link>
        </Button>
        <Button
          close
          className="js-remove-btn float-right ml-2"
          onClick={removeHandler}
        >
          <IoMdRemoveCircleOutline />
        </Button>
      </CardBody>
    </Card>
  );
}
