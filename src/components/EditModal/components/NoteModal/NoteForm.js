// @flow

import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Button,
  FormFeedback,
} from 'reactstrap';
import {
  Formik,
  Field,
  ErrorMessage,
} from 'formik';

import type { Node } from 'react';
import type { TNote, TCategories } from '../../../../types';

import FormikInput from '../FormikInput';

export type TProps = $ReadOnly<{|
  note: TNote,
  categories: TCategories,
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

export function DefaultCategoryOption(): Node {
  return (
    <option key="wasn\'t selected" value="undefined">
      --Please choose an option--
    </option>
  );
}

export default function NoteForm(props: TProps): Node {
  const {
    note,
    categories,
    onSave,
    onCancel,
  } = props;

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
            <Field
              name="category"
              type="select"
              component={FormikInput}
              defaultValue={undefined}
            >
              <DefaultCategoryOption />
              {categories.map(({ id, name }): Node => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
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
