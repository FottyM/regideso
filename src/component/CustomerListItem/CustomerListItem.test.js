import React from 'react'
import ReactDOM from 'react-dom'
import CustomerListItem from './CustomerListItem'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const data = {
    uuid: 'b48a2e56-40c4-4d0b-a3d7-04d4103ef5fc',
    username: 'johndoe',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    homeAdress: 'Hope county,TN, 3310',
    consumption: [
      {
        id: 1,
        period: '2018-07-05T02:01:02.719Z',
        data: [80, 19, 72, 60, 75, 52, 4, 77]
      }
    ]
  }
  ReactDOM.render(<CustomerListItem {...data} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
