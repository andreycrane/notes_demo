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
  children: string,
  to: LocationShape,
}>;

export default function MergeLink(props: TProps): Node {
  const {
    location,
    history,
    children,
    to,
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
    <button
      className="btn btn-link"
      type="button"
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}
