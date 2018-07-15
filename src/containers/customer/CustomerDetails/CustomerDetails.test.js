import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import CustomerDetails from './CustomerDetails'

describe('< CustomerDetails />', () => {
  const defautProps = {
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

  const initialState = {
    customers: {
      data: [{ ...defautProps }],
      error: {},
      current: defautProps,
      loading: false,
      uuid: null
    }
  }

  const mockStore = configureStore()
  let wrapper
  let store

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = shallow(
      <CustomerDetails store={store} customer={{ ...defautProps }} match={{}} />
    )
  })
  it('renders without crashing', () => {
    expect(wrapper.length).toBe(1)
  })

  it('renders the chart ', () => {
    expect(wrapper.find('Chart').first()).toHaveLength(1)
  })
})

Object
