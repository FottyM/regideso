import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'

import CustomerList from './CustomerList'

describe('<CustomerList />', () => {
  it("does't explode ", () => {
    const wrapper = shallow(<CustomerList />)
    expect(wrapper.length).toBe(1)
  })

  it('render the 10 charts')
})
