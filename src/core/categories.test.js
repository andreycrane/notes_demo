import { lorem, random } from 'faker';

import { create, remove, update } from './categories';


describe('core#categories', () => {
  const id = random.uuid();
  const name = lorem.word();

  it('creates new note', () => {
    const prevCategories = [];

    const nextCategories = create(
      prevCategories,
      { name },
    );

    expect(nextCategories).toHaveProperty('0.id');
    expect(nextCategories).toHaveProperty('0.name', name);
  });

  it('updates existing note', () => {
    const prevCategories = [
      { id, name },
    ];
    const newName = lorem.word();
    const nextCategories = update(
      prevCategories,
      {
        categoryId: id,
        name: newName,
      },
    );

    expect(nextCategories).toHaveProperty('0.id', id);
    expect(nextCategories).toHaveProperty('0.name', newName);
  });

  it('removes existing note', () => {
    const prevCategories = [{ id }];

    const nextCategories = remove(prevCategories, { categoryId: id });

    expect(nextCategories).toHaveLength(0);
  });
});
