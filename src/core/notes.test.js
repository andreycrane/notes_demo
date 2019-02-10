import { lorem, internet, random } from 'faker';

import { create, remove, update } from './notes';


describe('core#notes', () => {
  const id = random.uuid();
  const title = lorem.sentence();
  const text = lorem.text();
  const color = internet.color();

  it('creates new note', () => {
    const prevNotes = [];

    const nextNotes = create(
      prevNotes,
      title,
      text,
      color,
    );

    expect(nextNotes).toHaveProperty('0.id');
    expect(nextNotes).toHaveProperty('0.title', title);
    expect(nextNotes).toHaveProperty('0.text', text);
    expect(nextNotes).toHaveProperty('0.color', color);
    expect(nextNotes).toHaveProperty('0.category', undefined);
  });

  it('updates existing note', () => {
    const prevNotes = [
      {
        id,
        title,
        text,
        color,
        category: undefined,
      },
    ];
    const categoryId = random.uuid();

    const nextNotes = update(
      prevNotes,
      id,
      null,
      text,
      color,
      categoryId,
    );

    expect(nextNotes).toHaveProperty('0.id', id);
    expect(nextNotes).toHaveProperty('0.title', null);
    expect(nextNotes).toHaveProperty('0.text', text);
    expect(nextNotes).toHaveProperty('0.color', color);
    expect(nextNotes).toHaveProperty('0.category', categoryId);
  });

  it('removes existing note', () => {
    const prevNotes = [{ id }];

    const nextNotes = remove(prevNotes, id);

    expect(nextNotes).toHaveLength(0);
  });
});
