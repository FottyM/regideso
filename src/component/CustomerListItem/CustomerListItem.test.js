import React from 'react'
import { shallow } from 'enzyme'

import CustomerListItem from './CustomerListItem'

describe('<CustomerListItem />', () => {
  const defautProps = {
    uuid: 'b2c73a1b-1580-4ba5-b03f-2af814ebd62b',
    username: 'johndoe',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    homeAdress: 'Hope county,TN, 3310',
    consumption: [
      {
        id: 1,
        period: '2018-07-07T09:02:01.270Z',
        data: [
          64,
          21,
          38,
          57,
          31,
          87,
          82,
          34,
          28,
          48,
          100,
          91,
          86,
          6,
          15,
          83,
          40,
          55,
          58,
          93,
          88,
          63,
          50,
          42
        ]
      }
    ]
  }

  it("doesn't catch fire", () => {
    const wrapper = shallow(<CustomerListItem {...defautProps} />)
    expect(wrapper).toHaveLength(1)
  })
  it('renders given props', () => {
    const wrapper = shallow(<CustomerListItem {...defautProps} />)
    expect(wrapper.find('h5.card-title').text()).toBe('John Doe')
    expect(wrapper.find('Collapse').length).toBe(1)
  })

  it('renders <Collapse />', () => {
    const wrapper = shallow(<CustomerListItem {...defautProps} />)
    expect(wrapper.find('Collapse').prop('isOpened')).toEqual(false)
  })
  it('renders chart', () => {
    const wrapper = shallow(<CustomerListItem {...defautProps} />)
    expect(wrapper.find('Bar')).toHaveLength(1)
  })

  it('shows chart on click (+)', () => {
    const wrapper = shallow(<CustomerListItem {...defautProps} />)
    expect(wrapper.state('collapsed')).toBe(false)
    expect(wrapper.find('Collapse').prop('isOpened')).toBe(false)
    wrapper.find('.show-chart').simulate('click')
    expect(wrapper.state('collapsed')).toBe(true)
    expect(wrapper.find('Collapse').prop('isOpened')).toBe(true)
  })

  it('hides chart on click (-)', () => {
    const wrapper = shallow(<CustomerListItem {...defautProps} />)
    wrapper.setState({ collapsed: true })
    wrapper.find('.show-chart').simulate('click')
    expect(wrapper.state('collapsed')).toBe(false)
    expect(wrapper.find('Collapse').prop('isOpened')).toBe(false)
  })
})
