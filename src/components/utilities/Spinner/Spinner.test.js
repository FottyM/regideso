import React from 'react'
import { shallow } from 'enzyme'

import Spinner from './Spinner'

describe('<Spinner />', () => {
  let loading = true
  it('spins when loading is true', () => {
    const component = shallow(
      <Spinner loading={loading}>
        <p>follow your father</p>
      </Spinner>
    )
    expect(component.find('OrbitSpinner')).toHaveLength(1)
    expect(component.children()).toHaveLength(2)
  })
  it('renders children when loading is false', () => {
    loading = false
    const component = shallow(
      <Spinner loading={loading}>
        <p>follow your father</p>
      </Spinner>
    )
    expect(component.children()).toHaveHTML('<p>follow your father</p>')
  })
})
