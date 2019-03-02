// @flow

import { connect } from 'react-redux';
import type { Match, RouterHistory } from 'react-router-dom';

import type { TState, TCategory } from '../../../../types';

import { createCategory, updateCategory } from '../../../../ducks/categories';

import CategoryModal from './CategoryModal';

type TOwnProps = {
  match: Match,
  history: RouterHistory,
};

function mapStateToProps(state: TState, ownProps: TOwnProps): mixed {
  const { match: { params } } = ownProps;
  const { categories } = state;

  if (params.mode === 'edit') {
    return {
      title: 'Изменить категорию',
      category: categories.find(
        ((c: TCategory): boolean => c.id === params.categoryId),
      ),
    };
  }

  return {
    title: 'Создать категорию',
    category: { id: '', name: '' },
  };
}

function mapDispatchToProps(dispatch, ownProps: TOwnProps): mixed {
  const {
    history,
    match: { params },
  } = ownProps;

  if (params.mode === 'edit') {
    return {
      onSave(category: TCategory) {
        dispatch(updateCategory(category));
        history.goBack();
      },
      onCancel() {
        history.goBack();
      },
    };
  }

  return {
    onSave(category: TCategory) {
      dispatch(createCategory(category));
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
)(CategoryModal);
