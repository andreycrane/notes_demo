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
  type: 'text' | 'textarea' | 'select' | 'color',
  children: ?(Node | $ReadOnlyArray<Node>),
}>;

export default function FormikInput(
  {
    field,
    form,
    type,
    children,
    ...props
  }: TProps,
): Node {
  return (
    <Input
      invalid={!!(form.touched[field.name] && form.errors[field.name])}
      type={type}
      {...field}
      {...props}
    >
      {children}
    </Input>
  );
}
