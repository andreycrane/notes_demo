import React from 'react';
import { mount } from 'enzyme';

import MergeLink from './MergeLink';

describe('MergeLink component', () => {
  it('renders', () => {
    const wrapper = mount(
      <MergeLink
        to={{}}
        history={{}}
        location={{}}
      >
        Link
      </MergeLink>,
    );

    expect(wrapper.length).toBe(1);
  });

  it('merge query string', () => {
    const to = {
      pathname: '/new',
      search: '?key2=value2',
    };

    const history = {
      push: jest.fn(),
    };

    const location = {
      pathname: '/old',
      search: '?key1=value1',
    };

    const wrapper = mount(
      <MergeLink
        to={to}
        history={history}
        location={location}
      >
        Link
      </MergeLink>,
    );

    wrapper.simulate('click');
    expect(history.push).toHaveBeenCalledWith({
      pathname: '/new',
      search: '?key1=value1&key2=value2',
    });
  });
});
