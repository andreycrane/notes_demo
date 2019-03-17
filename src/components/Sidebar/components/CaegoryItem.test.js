import React from 'react';
import { mount } from 'enzyme';
import { lorem, random } from 'faker';
import { MemoryRouter } from 'react-router-dom';

import { CategoryItemComponent as CategoryItem } from './CategoryItem';

describe('CategoryItem component', () => {
  const remove = jest.fn();
  const id = random.uuid();

  const category = {
    id,
    name: lorem.word(),
  };

  it('renders', () => {
    const wrapper = mount(
      <MemoryRouter>
        <CategoryItem
          category={category}
          remove={remove}
        />
      </MemoryRouter>,
    );

    expect(wrapper.length).toBe(1);
  });

  it('calls "remove" callback when "Remove" button was pressed', () => {
    remove.mockClear();
    const wrapper = mount(
      <MemoryRouter>
        <CategoryItem
          category={category}
          remove={remove}
        />
      </MemoryRouter>,
    );
    const removeBtn = wrapper.find('Button.js-remove-btn');
    removeBtn.simulate('click');

    expect(remove).toHaveBeenCalledWith(id);
  });
});
