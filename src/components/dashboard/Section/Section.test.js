import React from 'react'
import DashboardSection from './Section'
import { shallow } from 'enzyme'

describe('<DashboardSection />', () => {
  it("doesn't explode", () => {
    const wrapper = shallow(<DashboardSection />)
    expect(wrapper).toHaveLength(1)
  })
  it('render title', () => {
    const wrapper = shallow(<DashboardSection />)
    expect(wrapper.first('h2')).toHaveText('Section Title')
  })
})
