// @flow

import React from 'react';
import {
  FormGroup,
  Label,
  Button,
  Form,
  FormFeedback,
} from 'reactstrap';
import {
  Formik,
  Field,
  ErrorMessage,
} from 'formik';

import type { Node } from 'react';
import type { TCategory } from '../../../../types';

import FormikInput from '../FormikInput';

export type TProps = $ReadOnly<{|
  category: TCategory,
  onSave: (category: TCategory) => void,
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

export default function CategoryForm(props: TProps): Node {
  const { category, onCancel, onSave } = props;

  function onSubmit(values, actions) {
    actions.setSubmitting(false);
    onSave(values);
  }

  return (
    <Formik
      initialValues={category}
      onSubmit={onSubmit}
      validate={validate}
    >
      {({ handleSubmit, handleReset }): Node => (
        <Form
          onSubmit={(e) => { e.preventDefault(); handleSubmit(e); }}
          onReset={handleReset}
        >
          <FormGroup>
            <Label for="name">Category name</Label>
            <Field name="name" type="text" component={FormikInput} />
            <ErrorMessage component={FormFeedback} name="name" />
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
