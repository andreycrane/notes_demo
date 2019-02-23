import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { lorem, random } from 'faker';

import CategoryForm from './CategoryForm';

Enzyme.configure({ adapter: new Adapter() });

describe('CategoryForm', () => {
  const category = {
    id: random.uuid(),
    name: lorem.word(),
  };
  const onSave = jest.fn();
  const onCancel = jest.fn();

  it('renders', () => {
    const wrapper = mount(
      <CategoryForm
        category={category}
        onSave={onSave}
        onCancel={onCancel}
      />,
    );

    expect(wrapper.length).toBe(1);
  });

  it('renders "name" in input', () => {
    const wrapper = mount(
      <CategoryForm
        category={category}
        onSave={onSave}
        onCancel={onCancel}
      />,
    );

    const input = wrapper.find('input[name="name"]');
    expect(input.length).toBe(1);
    expect(input.prop('value')).toBe(category.name);
  });

  it('calls "onSave" callback when "Save" button was pressed', async () => {
    onSave.mockClear();
    const wrapper = mount(
      <CategoryForm
        category={category}
        onSave={onSave}
        onCancel={onCancel}
      />,
    );

    const button = wrapper.find('button.js-btn-save');
    expect(button.length).toBe(1);
    button.simulate('submit');

    await new Promise(resolve => setTimeout(resolve, 0));

    expect(onSave).toBeCalled();
  });

  it('calls "onCancel" callback when "Cancel" button was pressed', () => {
    onCancel.mockClear();
    const wrapper = mount(
      <CategoryForm
        category={category}
        onSave={onSave}
        onCancel={onCancel}
      />,
    );

    const button = wrapper.find('Button.js-btn-cancel');
    expect(button.length).toBe(1);

    button.simulate('click', { target: button.props() });
    expect(onCancel).toBeCalled();
  });

  it('passes actual "name" to "onSave" callback', async () => {
    const newValue = lorem.word();
    onSave.mockClear();
    const wrapper = mount(
      <CategoryForm
        category={category}
        onSave={onSave}
        onCancel={onCancel}
      />,
    );

    const button = wrapper.find('button.js-btn-save');
    const input = wrapper.find('input[name="name"]');
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

    await new Promise(resolve => setTimeout(resolve, 0));
    expect(onSave).toHaveBeenCalledTimes(1);
    expect(onSave).toHaveBeenCalledWith({
      ...category,
      name: newValue,
    });
  });

  it('shows error message if "name" isn\'t valid', async () => {
    const wrapper = mount(
      <CategoryForm
        category={category}
        onSave={onSave}
        onCancel={onCancel}
      />,
    );

    const button = wrapper.find('button.js-btn-save');
    const input = wrapper.find('input[name="name"]');
    expect(button.length).toBe(1);
    expect(input.length).toBe(1);

    input.simulate('change', { target: { ...input.props(), value: '' } });
    button.simulate('submit');
    await new Promise(resolve => setTimeout(resolve, 0));
    wrapper.update();

    const errorMsgImpl = wrapper.find('ErrorMessageImpl[name="name"]');
    expect(errorMsgImpl.children().length).toBe(1);
  });
});
