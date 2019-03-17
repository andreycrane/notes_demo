import React from 'react';
import { mount } from 'enzyme';
import { lorem, random, internet } from 'faker';
import { MemoryRouter } from 'react-router-dom';

import { NoteComponent as Note } from './Note';

describe('Note component', () => {
  const remove = jest.fn();
  const id = random.uuid();

  const note = {
    id,
    title: lorem.word(),
    text: lorem.paragraph(),
    color: internet.color(),
    category: undefined,
  };

  it('renders', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Note
          note={note}
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
        <Note
          note={note}
          remove={remove}
        />
      </MemoryRouter>,
    );
    const removeBtn = wrapper.find('Button.js-remove-btn');
    removeBtn.simulate('click');

    expect(remove).toHaveBeenCalledWith(id);
  });
});
