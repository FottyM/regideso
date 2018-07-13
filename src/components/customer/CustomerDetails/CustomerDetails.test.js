import React from 'react'
import { shallow } from 'enzyme'

import CustomerDetails from './CustomerDetails'

describe('< CustomerDetails />', () => {
  it('renders without crashing', () => {
    const component = shallow(<CustomerDetails match={{}} />)
    expect(component.length).toBe(1)
  })

  it('gets the right user id from parent')
  it('renders the chart ')

  it('toggles chart type')
})
