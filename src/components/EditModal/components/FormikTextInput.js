// @flow

import React from 'react';
import { Input } from 'reactstrap';

import type { Node } from 'react';

export type TProps = $ReadOnly<{
  field: {
    name: string,
  },
  form: {
    errors: { [string]: string },
    touched: { [string]: string },
  },
}>;

export default function FormikTextInput({ field, form, ...props }: TProps): Node {
  return (
    <Input
      invalid={!!(form.touched[field.name] && form.errors[field.name])}
      {...field}
      {...props}
    />
  );
}
