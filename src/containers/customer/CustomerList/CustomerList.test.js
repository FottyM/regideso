import React from 'react'
import { shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store'

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

  const mockStore = configureStore()
  let wrapper
  let store

  beforeEach(() => {
    store = mockStore({ customers: { ...data } })
    wrapper = shallow(<CustomerList store={store} match={{}} history={{}} />)
  })
  it('does\'t explode ', () => {
    expect(wrapper.length).toBe(1)
  })
  it('fetches data on mount', () => {
    wrapper.update()
    expect(wrapper.prop('customers')).toBeTruthy()
  })
})
