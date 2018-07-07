import React from 'react';
import Main from './MainContent';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

describe('<MainContent />', () => {
  it('doesn\'t explode', () => {
    expect(shallow(<Main />)).toHaveLength(1)
  });
  it('contains an <AnimatedSwitch />', () => {
    const wrapper = shallow(<Main />)
    expect(wrapper.find('.route-wrapper')).toHaveLength(1)
  });
  it('has three <Route />s', () => {
    const wrapper = shallow(<Main />)
    expect(wrapper.find('Route')).toHaveLength(3)
  });
  it('it renders at \'/\' <DashboardSection />', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Main />
      </MemoryRouter>
    )
    expect(wrapper.first('DashboardSection')).toHaveLength(1)
  });
})
