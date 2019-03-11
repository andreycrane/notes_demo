// @flow

import React, { useMemo } from 'react';

import type { Node } from 'react';

export type TProps = {
  active: boolean,
  color: string,
  onClick: (color: string) => void,
};

export default function ColorButton(props: TProps): Node {
  const { active, color, onClick } = props;

  function onClickHandler() {
    onClick(color);
  }

  const style = useMemo(
    (): mixed => ({
      order: 0,
      flex: '0 1 auto',
      alignSelf: 'auto',
      borderRadius: 14,
      width: 28,
      height: 28,
      cursor: 'pointer',
      margin: '0 5px',
      backgroundColor: (active ? 'transparent' : color),
      boxShadow: (active ? `${color} 0px 0px 0px 3px inset` : 'none'),
    }),
    [color, active],
  );

  return (
    <div
      role="button"
      style={style}
      tabIndex={-1}
      onKeyDown={onClickHandler}
      onClick={onClickHandler}
    />
  );
}
