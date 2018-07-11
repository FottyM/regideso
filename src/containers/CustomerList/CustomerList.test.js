import React from 'react'
import { shallow, mount } from 'enzyme'

import CustomerList from './CustomerList'

describe('<CustomerList />', () => {
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
  it("does't explode ", () => {
    const wrapper = shallow(<CustomerList />)
    expect(wrapper.length).toBe(1)
  })
  it('fetches data on mount', async () => {
    const fetchData = sinon.spy()
    const wrapper = await mount(<CustomerList fetchData={fetchData} />)
    wrapper.update()
    expect(fetchData.callCount).toBe(1)
  })
  it(
    'sets state on mounnted'
    //  async () => {
    //   const fetchData = sinon.stub().returns(Promise.resolve(data))
    //   const wrapper = await mount(<CustomerList fetchData={fetchData} />)
    //   expect(wrapper.state('data')).toEqual(data)
    // }
  )

  it('renders one <Bar /> chart', async () => {
    const fetchData = sinon.stub().returns(Promise.resolve(data))
    const wrapper = await mount(<CustomerList fetchData={fetchData} />)
    wrapper.update()
    expect(wrapper.find('Bar').length).toBe(1)
  })
  it('renders error on request failed', async () => {
    const fetchData = sinon
      .stub()
      .returns(Promise.reject({ message: 'Component exploded' }))
    const wrapper = await mount(<CustomerList fetchData={fetchData} />)
    wrapper.update()
    expect(wrapper.state('error')).toEqual({ message: 'Component exploded' })
    expect(wrapper.find('div.alert').text()).toContain('Component exploded')
  })
  afterEach(() => {
    sinon.restore()
  })
})
