// @flow

import { connect } from 'react-redux';

import type { TState, TId } from '../../types';
import { removeNote } from '../../ducks/notes';

import NotesList from './components';

const mapStateToProps = (state: TState): mixed => ({
  notes: state.notes,
});

const mapDispatchToProps = (dispatch): mixed => ({
  remove: (id: TId): void => dispatch(removeNote({ id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);
