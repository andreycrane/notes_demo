// @flow

import React, { useMemo } from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Badge,
} from 'reactstrap';
import {
  IoMdCreate,
  IoMdRemoveCircleOutline,
} from 'react-icons/io';
import type { Node } from 'react';
import type { LocationShape } from 'react-router-dom';

import type { TId, TNote, TCategory } from '../../../types';

import MergeLink from '../../MergeLink';

export type TProps = {
  note: TNote,
  category: ?TCategory,
  remove: (id: TId) => void,
};

export function NoteComponent(props: TProps): Node {
  const { note, category, remove } = props;

  type TOnRemoveHandler = () => void;
  const removeHandler = useMemo(
    (): TOnRemoveHandler => (): void => remove(note.id),
    [note.id],
  );
  const editLink = useMemo(
    (): LocationShape => ({ pathname: `/notes/edit/${note.id}` }),
    [note.id],
  );
  const cardStyle = useMemo(
    (): mixed => ({ backgroundColor: note.color }),
    [note.color],
  );

  return (
    <Card style={cardStyle}>
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
          <MergeLink to={editLink}>
            <IoMdCreate />
          </MergeLink>
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

export default React.memo<TProps>(NoteComponent);
