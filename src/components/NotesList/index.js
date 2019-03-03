// @flow

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import type { Location } from 'react-router-dom';

import type {
  TState,
  TId,
  TNotes,
} from '../../types';

import { removeNote } from '../../ducks/notes';

import { categoryFilter, searchFilter } from './filters';
import NotesList from './components';

type TProps = {
  location: Location
};

function mapStateToProps(state: TState, ownProps: TProps): mixed {
  const { location } = ownProps;
  const sp = new URLSearchParams(location.search);

  const filterParams = [
    categoryFilter.bind(null, sp),
    searchFilter.bind(null, sp),
  ];

  const notes = filterParams.reduce(
    ((acc: TNotes, filterFunc): TNotes => acc.filter(filterFunc)),
    state.notes,
  );


  return ({ notes });
}

const mapDispatchToProps = (dispatch): mixed => ({
  remove: (id: TId): void => dispatch(removeNote({ id })),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotesList));
