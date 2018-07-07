import React from 'react'
import { shallow, mount } from 'enzyme'
const sinon = require('sinon')

import CustomerList from './CustomerList'

describe('<CustomerList />', () => {
  it("does't explode ", () => {
    const wrapper = shallow(<CustomerList />)
    expect(wrapper.length).toBe(1)
  })
  it('makes an http request on mount', async () => {
    const bond = sinon
      .stub(CustomerList.prototype, 'componentDidMount')
      .returns(Promise.resolve())
    const wrapper = await mount(<CustomerList />)
    wrapper.render()
    expect(bond.callCount).toBe(1)
  })
  it('changes the state after getting the data', async () => {
    const data = [
      {
        uuid: 'b2c73a1b-1580-4ba5-b03f-2af814ebd62b',
        username: 'johndoe',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@doe.com',
        homeAdress: 'Hope county,TN, 3310',
        consumption: [
          {
            id: 1,
            period: '2018-07-07T09:02:01.270Z',
            data: [
              64,
              21,
              38,
              57,
              31,
              87,
              82,
              34,
              28,
              48,
              100,
              91,
              86,
              6,
              15,
              83,
              40,
              55,
              58,
              93,
              88,
              63,
              50,
              42
            ]
          }
        ]
      }
    ]
    sinon
      .stub(CustomerList.prototype, 'componentDidMount')
      .returns(Promise.resolve(data))
    const wrapper = await mount(<CustomerList />)
    wrapper.render()

    expect(wrapper.state('data')).toBeTruthy()
  })

  it('')
  it('renders error on request failed')
  afterEach(() => {
    sinon.restore()
  })
})
