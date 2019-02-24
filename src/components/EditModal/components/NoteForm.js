// @flow

import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from 'reactstrap';
import {
  Formik,
  Field,
  ErrorMessage,
} from 'formik';

import type { Node } from 'react';
import type { TNote } from '../../../types';

import FormikInput from './FormikInput';

export type TProps = $ReadOnly<{|
  note: TNote,
  onSave: (note: TNote) => void,
  onCancel: () => void,
|}>;

// Synchronous validation
export function validate({ name }: { name?: string }): mixed {
  const errors = {};
  if (!name) {
    errors.name = 'Required';
  } else if (name.length < 3 || name.length > 50) {
    errors.name = 'Field "name" must be between 3 and 50 characters';
  }

  return errors;
}


export default function NoteForm(props: TProps): Node {
  const { note, onSave, onCancel } = props;

  function onSubmit(values, actions) {
    actions.setSubmitting(false);
    onSave(values);
  }

  return (
    <Formik
      initialValues={note}
      onSubmit={onSubmit}
      validate={validate}
    >
      {({ handleSubmit, handleReset }): Node => (
        <Form
          onSubmit={(e) => { e.preventDefault(); handleSubmit(e); }}
          onReset={handleReset}
        >
          <FormGroup>
            <Label for="title">Title</Label>
            <Field name="title" type="text" component={FormikInput} />
            <ErrorMessage component={FormFeedback} name="title" />
          </FormGroup>
          <FormGroup>
            <Label for="text">Text</Label>
            <Field name="text" type="textarea" component={FormikInput} />
            <ErrorMessage component={FormFeedback} name="text" />
          </FormGroup>
          <FormGroup>
            <Label for="color">Color</Label>
            <Field name="color" type="color" component={FormikInput} />
            <ErrorMessage component={FormFeedback} name="color" />
          </FormGroup>
          <FormGroup>
            <Label for="category">Category</Label>
            <Field name="category" type="select" component={FormikInput}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Field>
            <ErrorMessage component={FormFeedback} name="color" />
          </FormGroup>
          <Button
            color="secondary"
            className="ml-2 float-right js-btn-cancel"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            className="ml-2 float-right js-btn-save"
            type="submit"
          >
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
}
