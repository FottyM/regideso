import React from 'react'
import SideBar from './SideBar'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

describe('<SideBar />', () => {
  it("doesn't explode", () => {
    const wrapper = shallow(<SideBar />)
    expect(wrapper).toHaveLength(1)
  })
  it("has <NavLink to='/section/home'/> ", () => {
    const wrapper = shallow(<SideBar />)
    expect(
      wrapper
        .find('NavLink')
        .first()
        .prop('to')
    ).toEqual('/section/home')
  })
})
