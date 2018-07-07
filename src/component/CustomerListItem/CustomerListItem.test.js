import React from 'react';
import { shallow } from 'enzyme';

import CustomerListItem from './CustomerListItem';

describe('<CustomerListItem />', () => {
  const defautProps = {
    uuid: 'b48a2e56-40c4-4d0b-a3d7-04d4103ef5fc',
    username: 'johndoe',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    homeAdress: 'Hope county,TN, 3310',
    consumption: [
      {
        id: 1,
        period: '2018-07-05T02:01:02.719Z',
        data: [80, 19, 72, 60, 75, 52, 4, 77]
      }
    ]
  }

  it('doesn\'t catch fire', () => {
    const wrapper = shallow(<CustomerListItem {...defautProps} />)
    expect(wrapper).toHaveLength(1)
  });
  it('renders given props', () => {
    const wrapper = shallow(<CustomerListItem {...defautProps} />)
    expect(wrapper.find('h5.card-title').text()).toBe('John Doe');
  })

  it('renders <Collapse />', () => {
    const wrapper = shallow(<CustomerListItem {...defautProps} />)
    expect(wrapper.find('Collapse').prop('isOpened')).toEqual(true)
  });
  it('renders <Line /> chart', () => {
    const wrapper = shallow(<CustomerListItem {...defautProps} />)
    expect(wrapper.find('Line')).toHaveLength(1)
  });
})
