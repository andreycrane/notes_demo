import React from 'react';
import { mount } from 'enzyme';
import { lorem } from 'faker';
import { MemoryRouter } from 'react-router-dom';

import TopBar from './TopBar';

describe('TopBar component', () => {
  const searchQuery = lorem.word();
  const onSearch = jest.fn();

  it('renders', () => {
    const wrapper = mount(
      <MemoryRouter>
        <TopBar
          searchQuery={searchQuery}
          onSearch={onSearch}
        />
      </MemoryRouter>,
    );

    expect(wrapper.length).toBe(1);
  });

  it('renders "searchQuery" in input', () => {
    const q = lorem.word();

    const wrapper = mount(
      <MemoryRouter>
        <TopBar
          searchQuery={q}
          onSearch={onSearch}
        />
      </MemoryRouter>,
    );

    const input = wrapper.find('input.js-search-input');
    expect(input.props()).toHaveProperty('value', q);
  });

  it('calls "onSearch" callback if "Search" button was pressed', () => {
    onSearch.mockClear();

    const q = lorem.word();

    const wrapper = mount(
      <MemoryRouter>
        <TopBar
          searchQuery={q}
          onSearch={onSearch}
        />
      </MemoryRouter>,
    );

    const button = wrapper.find('button.js-search-btn');
    button.simulate('click');
    expect(onSearch).toHaveBeenCalled();
  });

  it('passes right query into "onSearch" callback if "Search" button was pressed', () => {
    onSearch.mockClear();

    const oldQuery = lorem.word();
    const newQuery = lorem.word();

    const wrapper = mount(
      <MemoryRouter>
        <TopBar
          searchQuery={oldQuery}
          onSearch={onSearch}
        />
      </MemoryRouter>,
    );

    const button = wrapper.find('button.js-search-btn');
    const input = wrapper.find('input.js-search-input');

    input.simulate('change', { target: { value: newQuery } });
    button.simulate('click');

    expect(onSearch).toHaveBeenCalledWith(newQuery);
  });
});
