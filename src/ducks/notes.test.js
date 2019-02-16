import { lorem, internet, random } from 'faker';

import notesReducer, {
  defaultState,
  createNote,
  updateNote,
  removeNote,
} from './notes';

const mockId = random.uuid();
const title = lorem.sentence();
const text = lorem.text();
const color = internet.color();

jest.mock('../lib/id', () => jest.fn(() => mockId));

describe('ducks/notes#reducer', () => {
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
      noteId: mockId,
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
    const removeAction = removeNote({ noteId: mockId });
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
