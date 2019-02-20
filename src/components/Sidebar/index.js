// @flow

import { connect } from 'react-redux';

import type { TState, TId } from '../../types';
import { editNew, editExisting } from '../../ducks/edit';
import { removeCategory } from '../../ducks/categories';

import Sidebar from './components';

const mapStateToProps = (state: TState): mixed => ({
  categories: state.categories,
});

const mapDispatchToProps = (dispatch): mixed => ({
  add: (): void => dispatch(editNew('CATEGORY')),
  edit: (id: TId): void => dispatch(editExisting('CATEGORY', id)),
  remove: (categoryId: TId): void => dispatch(removeCategory({ categoryId })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
