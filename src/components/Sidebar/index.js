// @flow

import { connect } from 'react-redux';

import type { TState, TId } from '../../types';
import { removeCategory } from '../../ducks/categories';

import Sidebar from './components';

const mapStateToProps = (state: TState): mixed => ({
  categories: state.categories,
});

const mapDispatchToProps = (dispatch): mixed => ({
  remove: (id: TId): void => dispatch(removeCategory({ id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
