import React from 'react';
import { mount } from 'enzyme';
import { lorem, random } from 'faker';

import NoteForm from './NoteForm';

import {
  defaultState as categories,
} from '../../../../ducks/categories';

import { colors } from '../../../../lib/constants';

describe('NoteForm', () => {
  const note = {
    id: random.uuid(),
    title: lorem.word(),
    text: lorem.sentences(),
    color: colors[0],
    category: categories[0].id,
  };
  const onCancel = jest.fn();

  it('renders', () => {
    const onSave = jest.fn();
    const wrapper = mount(
      <NoteForm
        note={note}
        categories={categories}
        onSave={onSave}
        onCancel={onCancel}
      />,
    );

    expect(wrapper.length).toBe(1);
  });

  it('calls "onSave" callback when "Save" button was pressed', async () => {
    const onSave = jest.fn(async () => {
      await expect(onSave).toBeCalled();
    });

    const wrapper = mount(
      <NoteForm
        note={note}
        categories={categories}
        onSave={onSave}
        onCancel={onCancel}
      />,
    );

    const button = wrapper.find('button.js-btn-save');
    expect(button.length).toBe(1);
    button.simulate('submit');
  });

  it('calls "onCancel" callback when "Cancel" button was pressed', () => {
    onCancel.mockClear();
    const onSave = jest.fn();
    const wrapper = mount(
      <NoteForm
        note={note}
        categories={categories}
        onSave={onSave}
        onCancel={onCancel}
      />,
    );

    const button = wrapper.find('Button.js-btn-cancel');
    expect(button.length).toBe(1);

    button.simulate('click', { target: button.props() });
    expect(onCancel).toBeCalled();
  });

  [
    { key: 'title', tag: 'input' },
    { key: 'text', tag: 'textarea' },
    { key: 'category', tag: 'select' },
  ].forEach(({ key, tag }) => {
    it(`renders "${key}" in ${tag}`, () => {
      const onSave = jest.fn();
      const wrapper = mount(
        <NoteForm
          note={note}
          categories={categories}
          onSave={onSave}
          onCancel={onCancel}
        />,
      );
      const input = wrapper.find(`${tag}[name="${key}"]`);
      expect(input.length).toBe(1);
      expect(input.prop('value')).toBe(note[key]);
    });
  });

  it('renders "color" in color input', () => {
    const onSave = jest.fn();
    const wrapper = mount(
      <NoteForm
        note={note}
        categories={categories}
        onSave={onSave}
        onCancel={onCancel}
      />,
    );

    const Hover = wrapper.find(`ColorPicker Hover[active=true][color="${note.color}"]`);
    expect(Hover).toHaveLength(1);
  });

  [
    { key: 'title', tag: 'input', newValue: lorem.word() },
    { key: 'text', tag: 'textarea', newValue: lorem.paragraph() },
    { key: 'category', tag: 'select', newValue: categories[1].id },
  ].forEach(({ key, tag, newValue }) => {
    it(`passes actual "${key}" to "onSave" callback`, () => {
      const onSave = jest.fn(async () => {
        await expect(onSave).toHaveBeenCalledWith({
          ...note,
          [key]: newValue,
        });
      });

      const wrapper = mount(
        <NoteForm
          note={note}
          categories={categories}
          onSave={onSave}
          onCancel={onCancel}
        />,
      );

      const button = wrapper.find('button.js-btn-save');
      const input = wrapper.find(`${tag}[name="${key}"]`);
      expect(button.length).toBe(1);
      expect(input.length).toBe(1);

      input.simulate(
        'change',
        {
          target: {
            ...input.props(),
            value: newValue,
          },
        },
      );
      button.simulate('submit');
    });
  });

  it('passes actual "color" to "onSave" callback', async () => {
    const newColor = colors[1];
    const onSave = jest.fn(async () => {
      await expect(onSave).toHaveBeenCalledWith({
        ...note,
        color: newColor,
      });
    });

    const wrapper = mount(
      <NoteForm
        note={note}
        categories={categories}
        onSave={onSave}
        onCancel={onCancel}
      />,
    );

    const button = wrapper.find('button.js-btn-save');
    const Swatch = wrapper.find(`ColorPicker Hover[active=false][color="${newColor}"] Swatch`);
    expect(button.length).toBe(1);
    expect(Swatch.length).toBe(1);

    Swatch.simulate('click');
    button.simulate('submit');
  });
});
