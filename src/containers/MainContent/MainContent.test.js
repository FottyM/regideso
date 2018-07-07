import React from 'react'
import Main from './MainContent'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

describe('<MainContent />', () => {
  it("doesn't explode", () => {
    expect(shallow(<Main />).length).toBe(1)
  })
  it('contains an <AnimatedSwitch />', () => {
    const wrapper = shallow(<Main />)
    expect(wrapper.find('.route-wrapper').length).toEqual(1)
  })
  it('has three <Route />s', () => {
    const wrapper = shallow(<Main />)
    expect(wrapper.find('Route').length).toBe(3)
  })
  it("it renders at '/' <DashboardSection />", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Main />
      </MemoryRouter>
    )
    expect(wrapper.first('DashboardSection').length).toEqual(1)
  })
})
