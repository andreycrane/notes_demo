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
  const { match } = ownProps;

  if (match === null) {
    return {
      isOpen: false,
      title: '',
      category: {},
    };
  }

  const { params } = match;
  const { categories } = state;

  if (params.mode === 'edit') {
    return {
      isOpen: true,
      title: 'Изменить категорию',
      category: categories.find(
        ((c: TCategory): boolean => c.id === params.id),
      ),
    };
  }

  return {
    isOpen: true,
    title: 'Создать категорию',
    category: { id: '', name: '' },
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
