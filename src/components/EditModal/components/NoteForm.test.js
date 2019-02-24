import React from 'react';
import { mount } from 'enzyme';
import { lorem, random } from 'faker';

import NoteForm from './NoteForm';


describe('NoteForm', () => {
  const category = {
    id: random.uuid(),
    name: lorem.word(),
  };
  const onCancel = jest.fn();

  it('renders', () => {
    const onSave = jest.fn();
    const wrapper = mount(
      <NoteForm
        category={category}
        onSave={onSave}
        onCancel={onCancel}
      />,
    );

    expect(wrapper.length).toBe(1);
  });
});
