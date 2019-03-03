// @flow

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import type { Location } from 'react-router-dom';

import type { TState, TId } from '../../types';
import { removeCategory } from '../../ducks/categories';

import Sidebar from './components';

type TProps = {
  location: Location
};

function mapStateToProps(state: TState, ownProps: TProps): mixed {
  const { location } = ownProps;
  const sp = new URLSearchParams(location.search);

  return ({
    active: sp.get('category'),
    categories: state.categories,
  });
}

const mapDispatchToProps = (dispatch): mixed => ({
  remove: (id: TId): void => dispatch(removeCategory({ id })),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));
