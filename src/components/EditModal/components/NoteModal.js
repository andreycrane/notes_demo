// @flow

import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';


import type { Node } from 'react';
import type { TNote } from '../../../types';

import ModalWrapper from './ModalWrapper';

export type TProps = {
  isOpen: boolean,
  note: TNote,
  onSave: (note: TNote) => void,
  onCancel: () => void
};

export default function NoteModal(props: TProps): Node {
  const { isOpen, note } = props;

  return (
    <ModalWrapper>
      <Form>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            value={note.title}
          />
        </FormGroup>
        <FormGroup>
          <Label for="text">Text</Label>
          <Input
            type="textarea"
            name="text"
            id="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="color">Color</Label>
          <Input
            type="color"
            name="color"
            id="color"
          />
        </FormGroup>
        <FormGroup>
          <Label for="category">Category</Label>
          <Input type="select" name="category" id="category">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
      </Form>
    </ModalWrapper>
  );
}
