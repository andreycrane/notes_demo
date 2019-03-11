// @flow

import React from 'react';

import type { Node } from 'react';
import { colors } from '../../../../lib/constants';

import CircleButton from './CircleButton';

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


const style = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  alignContent: 'flex-start',
  alignItems: 'center',
};

export default function FormikColorInput(props: TProps): Node {
  const { field } = props;
  const { value, onChange } = field;

  function onChangeHandler(color) {
    onChange({
      target: { value: color, name: field.name },
    });
  }

  return (
    <div style={style}>
      {colors.map((color): Node => (
        <CircleButton
          key={color}
          active={value === color}
          color={color}
          onClick={onChangeHandler}
        />
      ))}
    </div>
  );
}
