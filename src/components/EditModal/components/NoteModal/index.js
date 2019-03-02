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
  const { match: { params } } = ownProps;
  const { categories, notes } = state;

  if (params.mode === 'edit') {
    return {
      categories,
      title: 'Изменить заметку',
      note: notes.find(
        ((n: TNote): boolean => n.id === params.id),
      ),
    };
  }

  return {
    categories,
    title: 'Создать заметку',
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
  const {
    history,
    match: { params },
  } = ownProps;

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
