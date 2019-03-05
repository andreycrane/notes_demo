// @flow

import React from 'react';
import { CirclePicker } from 'react-color';

import type { Node } from 'react';

import { colors } from '../../../lib/constants';

type TEvent = {
  target: {
    value: string,
    name: string,
  },
};

type TProps = {
  field: {
    name: string,
    value: string,
    onChange: (e: TEvent) => void,
  },
};

export default function FormikColorInput(props: TProps): Node {
  const { field, ...otherProps } = props;
  const { value, onChange } = field;

  function onChangeHandler({ hex }) {
    onChange({
      target: { value: hex, name: field.name },
    });
  }

  return (
    <CirclePicker
      colors={colors}
      color={value}
      onChange={onChangeHandler}
      onChangeComplete={onChangeHandler}
      {...otherProps}
    />
  );
}
