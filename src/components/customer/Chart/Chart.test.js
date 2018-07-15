import React from 'react'
import { shallow } from 'enzyme'

import Chart from './Chart'

describe('<Chart />', () => {
  const state = {
    uuid: '0519de3c-c18b-46e9-a18c-665502726eba',
    username: 'johndoe',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    homeAdress: 'Hope county,TN, 3310',
    consumption: [
      {
        id: 1,
        period: '2018-07-11T18:52:26.711Z',
        data: [
          27,
          78,
          22,
          47,
          46,
          68,
          44,
          10,
          52,
          30,
          94,
          42,
          5,
          41,
          72,
          12,
          87,
          83,
          71,
          25,
          98,
          8,
          18,
          16
        ]
      }
    ]
  }
  it('doesn\'t crash', () => {
    const change = sinon.spy()
    const component = shallow(
      <Chart
        color="rgba(40,80,120,.5)"
        title="Charty and george"
        changeColorHandler={change}
        data={state.consumption[0].data}
        type="line"
      />
    )
    expect(component.length).toBe(1)
    expect(component.find('h5').first()).toHaveText('Charty and george')
  })
})
