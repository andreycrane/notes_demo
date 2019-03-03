// @flow

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import type { Location } from 'react-router-dom';

import type {
  TState,
  TId,
  TNote,
  TNotes,
} from '../../types';

import { removeNote } from '../../ducks/notes';

import NotesList from './components';

type TProps = {
  location: Location
};

function mapStateToProps(state: TState, ownProps: TProps): mixed {
  const { location } = ownProps;
  const sp = new URLSearchParams(location.search);

  const filterParams = [
    function categoryFilter(n: TNote): boolean {
      if (!sp.has('category')) {
        return true;
      }

      return (n.category === sp.get('category'));
    },
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
