import { lorem, random } from 'faker';


import categoriesReducer, {
  defaultState,
  createCategory,
  updateCategory,
  removeCategory,
} from './categories';

const mockId = random.uuid();
const name = lorem.word();

jest.mock('../lib/id', () => jest.fn(() => mockId));

describe('ducks/categories#reducer', () => {
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
      categoryId: mockId,
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
    const removeAction = removeCategory({ categoryId: mockId });
    const newState = categoriesReducer(prevState, removeAction);
    const expected = [{ id: mockId, name }];

    expect(newState).toEqual(
      expect.not.arrayContaining(expected),
    );
  });
});
