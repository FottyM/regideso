import React from 'react'
import Main from './MainContent'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

describe('<MainContent />', () => {
  it('doesn\'t explode', () => {
    expect(shallow(<Main />)).toHaveLength(1)
  })

  it('has  <Routes />', () => {
    const wrapper = shallow(<Main />)
    expect(wrapper.find('Routes')).toHaveLength(1)
  })
  it('it renders at path \'/\' <DashboardSection />', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Main />
      </MemoryRouter>
    )
    expect(wrapper.first('DashboardSection')).toHaveLength(1)
  })
})
