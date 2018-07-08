import React from 'react'
import Home from './Home'
import { shallow } from 'enzyme'

describe('<Home />', () => {
  it("does't blow up", () => {
    const wrapper = shallow(<Home />)
    expect(wrapper).toHaveLength(1)
  })
  it('contains <SideBar />', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('SideBar')).toHaveLength(1)
  })
  it('contains <MainContent />', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('MainContent')).toHaveLength(1)
  })
  it('contains .row with 2 children ', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('div.row').children()).toHaveLength(2)
  })
})
