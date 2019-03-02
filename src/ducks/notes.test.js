import { lorem, internet, random } from 'faker';

describe('ducks/notes#reducer', () => {
  const mockId = random.uuid();
  const title = lorem.sentence();
  const text = lorem.text();
  const color = internet.color();

  const mockIdFn = jest.fn(() => random.uuid());
  jest.doMock('../lib/id', () => mockIdFn);

  const {
    default: notesReducer,
    defaultState,
    createNote,
    updateNote,
    removeNote,
  } = require('./notes');

  mockIdFn.mockImplementation(() => mockId);

  it('creates new note', () => {
    const action = createNote({ title, text, color });
    const newState = notesReducer(defaultState, action);
    const expected = [{
      id: mockId,
      title,
      text,
      color,
    }];

    expect(newState).toEqual(
      expect.arrayContaining(expected),
    );
  });

  it('updates existing note', () => {
    const createAction = createNote({ title, text, color });
    const prevState = notesReducer(defaultState, createAction);
    const newTitle = lorem.word();
    const updateAction = updateNote({
      id: mockId,
      title: newTitle,
      text,
      color,
    });
    const newState = notesReducer(prevState, updateAction);
    const expected = [{
      id: mockId,
      title: newTitle,
      text,
      color,
    }];

    expect(newState).toEqual(
      expect.arrayContaining(expected),
    );
  });

  it('removes existing', () => {
    const createAction = createNote({ title, text, color });
    const prevState = notesReducer(defaultState, createAction);
    const removeAction = removeNote({ id: mockId });
    const newState = notesReducer(prevState, removeAction);
    const expected = [{
      id: mockId,
      title,
      text,
      color,
    }];

    expect(newState).toEqual(
      expect.not.arrayContaining(expected),
    );
  });
});
