// @flow

import React, { useMemo } from 'react';
import { withRouter } from 'react-router-dom';
import type { Node } from 'react';
import type { Location, RouterHistory } from 'react-router-dom';

import TopBar from './TopBar';

type TProps = {
  location: Location,
  history: RouterHistory,
};

function Component(props: TProps): Node {
  const { location, history } = props;
  const sp = new URLSearchParams(location.search);
  const search = sp.get('search');
  const searchQuery = typeof search === 'string' ? search : '';

  // using the same handler function if nothing changed
  type TOnSearch = (query: string) => void;
  const onSearch = useMemo(
    ((): TOnSearch => (query: string) => {
      if (query.length > 0) {
        history.push({
          pathname: '/',
          search: `?search=${query}`,
        });
        return;
      }

      history.push('/');
    }),
    [history],
  );

  return (
    <TopBar
      searchQuery={searchQuery}
      onSearch={onSearch}
    />
  );
}

export default withRouter(Component);
