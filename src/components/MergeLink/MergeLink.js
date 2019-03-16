// @flow

import React from 'react';

import type { Node } from 'react';
import type {
  RouterHistory,
  Location,
  LocationShape,
} from 'react-router-dom';

export type TProps = $ReadOnly<{
  history: RouterHistory,
  location: Location,
  children: Node,
  to: LocationShape,
  className?: string,
}>;

export default function MergeLink(props: TProps): Node {
  const {
    location,
    history,
    children,
    to,
    className,
  } = props;

  function onClickHandler() {
    const { search: srcSearch } = location;
    const { search: dstSearch } = to;

    const sourceParams = new URLSearchParams(srcSearch);
    const destParams = new URLSearchParams(dstSearch);

    destParams.forEach((value, key) => {
      sourceParams.set(key, value);
    });

    const newLocation: LocationShape = {
      ...location,
      ...to,
      search: `?${sourceParams.toString()}`,
    };

    history.push(newLocation);
  }

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events
    <a
      role="button"
      tabIndex={-1}
      style={{ cursor: 'pointer' }}
      onClick={onClickHandler}
      className={className}
    >
      {children}
    </a>
  );
}
