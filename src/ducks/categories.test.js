import { lorem, random } from 'faker';

describe('ducks/categories#reducer', () => {
  const mockId = random.uuid();
  const name = lorem.word();

  const mockIdFn = jest.fn(() => random.uuid());
  jest.doMock('../lib/id', () => mockIdFn);

  const {
    default: categoriesReducer,
    defaultState,
    createCategory,
    updateCategory,
    removeCategory,
  } = require('./categories');

  mockIdFn.mockImplementation(() => mockId);

  it('creates new category', () => {
    const action = createCategory({ name });
    const newState = categoriesReducer(defaultState, action);
    const expected = [{ id: mockId, name }];

    expect(newState).toEqual(
      expect.arrayContaining(expected),
    );
  });

  it('updates existing category', () => {
    const createAction = createCategory({ name });
    const prevState = categoriesReducer(defaultState, createAction);
    const newName = lorem.word();
    const updateAction = updateCategory({
      id: mockId,
      name: newName,
    });
    const newState = categoriesReducer(prevState, updateAction);
    const expected = [{ id: mockId, name: newName }];

    expect(newState).toEqual(
      expect.arrayContaining(expected),
    );
  });

  it('removes existing category', () => {
    const createAction = createCategory({ name });
    const prevState = categoriesReducer(defaultState, createAction);
    const removeAction = removeCategory({ id: mockId });
    const newState = categoriesReducer(prevState, removeAction);
    const expected = [{ id: mockId, name }];

    expect(newState).toEqual(
      expect.not.arrayContaining(expected),
    );
  });
});
