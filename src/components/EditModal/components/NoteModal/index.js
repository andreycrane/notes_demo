// @flow

import { connect } from 'react-redux';
import type { Match, RouterHistory } from 'react-router-dom';

import type { TState, TNote } from '../../../../types';

import { createNote, updateNote } from '../../../../ducks/notes';

import NoteModal from './NoteModal';

type TOwnProps = {
  match: Match,
  history: RouterHistory,
};

function mapStateToProps(state: TState, ownProps: TOwnProps): mixed {
  const { match } = ownProps;

  if (match === null) {
    return {
      title: '',
      isOpen: false,
      categories: [],
      note: {},
    };
  }

  const { params } = match;
  const { categories, notes } = state;

  if (params.mode === 'edit') {
    return {
      isOpen: true,
      categories,
      title: 'Edit existing note',
      note: notes.find(
        ((n: TNote): boolean => n.id === params.id),
      ),
    };
  }

  return {
    isOpen: true,
    categories,
    title: 'Create new note',
    note: {
      id: '',
      title: '',
      text: '',
      color: '',
      category: undefined,
    },
  };
}

function mapDispatchToProps(dispatch, ownProps: TOwnProps): mixed {
  const { match } = ownProps;

  if (match === null) {
    return {
      onSave() {},
      onCancel() {},
    };
  }

  const { history } = ownProps;
  const { params } = match;

  if (params.mode === 'edit') {
    return {
      onSave(note: TNote) {
        dispatch(updateNote(note));
        history.goBack();
      },
      onCancel() {
        history.goBack();
      },
    };
  }

  return {
    onSave(note: TNote) {
      dispatch(createNote(note));
      history.goBack();
    },
    onCancel() {
      history.goBack();
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteModal);
