import id from '../lib/id';
import editReducer, {
  defaultState,
  editNew,
  editExisting,
  closeEdit,
} from './edit';

describe('ducks/edit', () => {
  it('sets "NEW" edit mode', () => {
    const action = editNew('NOTE');
    const newState = editReducer(defaultState, action);

    expect(newState).toHaveProperty('mode', 'NEW');
    expect(newState).toHaveProperty('type', 'NOTE');
    expect(newState).toHaveProperty('id', null);
  });

  it('sets "EXISTING" edit mode', () => {
    const noteId = id();
    const action = editExisting('NOTE', noteId);
    const newState = editReducer(defaultState, action);

    expect(newState).toHaveProperty('mode', 'EXISTING');
    expect(newState).toHaveProperty('type', 'NOTE');
    expect(newState).toHaveProperty('id', noteId);
  });

  it('closes edit mode', () => {
    const editNewAction = editNew('NOTE');
    const prevState = editReducer(defaultState, editNewAction);
    const closeEditAction = closeEdit();
    const newState = editReducer(prevState, closeEditAction);

    expect(newState).toHaveProperty('mode', null);
    expect(newState).toHaveProperty('type', null);
    expect(newState).toHaveProperty('id', null);
  });
});
