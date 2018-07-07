import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

describe('<App/>', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toHaveLength(1)
  });
  it('renders with routes', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )
    expect(wrapper).toHaveLength(1)
  });
  it('contains <NavBar />', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('NavBar')).toHaveLength(1)
  });
  it('contains <Home />', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('Home')).toHaveLength(1)
  });
})
