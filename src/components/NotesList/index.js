// @flow

import { connect } from 'react-redux';

import type { TState, TId } from '../../types';
import { editExisting } from '../../ducks/edit';
import { removeNote } from '../../ducks/notes';

import NotesList from './components';

const mapStateToProps = (state: TState): mixed => ({
  notes: state.notes,
});

const mapDispatchToProps = (dispatch): mixed => ({
  edit: (id: TId): void => dispatch(editExisting('NOTE', id)),
  remove: (noteId: TId): void => dispatch(removeNote({ noteId })),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);
