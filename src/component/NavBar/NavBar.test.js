import React from 'react'
import { shallow } from 'enzyme'

import NavBar from './NavBar'

describe('<NavBar />', () => {
  it('renders fine', () => {
    const wrapper = shallow(<NavBar />)
    expect(wrapper.length).toBe(1)
  })

  it('renders company name', () => {
    const wrapper = shallow(<NavBar />)
    expect(
      wrapper
        .find('a.navbar-brand')
        .first()
        .text()
    ).toBe('Regideso')
  })
})
