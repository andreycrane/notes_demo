// @flow

import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

import type { Node } from 'react';

type Props = {
  isOpen: boolean
};

export default function EditModal({ isOpen }: Props): Node {
  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>Modal title</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              type="text"
              name="title"
              id="title"
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
      </ModalBody>
      <ModalFooter>
        <Button color="primary">Do Something</Button>
        <Button color="secondary">Cancel</Button>
      </ModalFooter>
    </Modal>
  );
}
