import React from 'react'
import { shallow } from 'enzyme'

import Toolbar from './Toolbar'
describe('<Toolbar />', () => {
  it('renders', () => {
    const component = shallow(<Toolbar />)
    expect(component).toMatchSnapshot()
  })
})
