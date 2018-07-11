import React from 'react'
import { shallow } from 'enzyme'

import Alert from './Alert'

describe('<Alert />', () => {
  it("doesn't catch fire", () => {
    const component = shallow(
      <Alert>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vitae
          nisi quam provident quidem est sequi tempore blanditiis cupiditate
          consectetur et quas natus expedita, mollitia nobis rem, magnam,
          voluptates excepturi?
        </p>
      </Alert>
    )
    expect(component.length).toBe(1)
    expect(component.hasClass('alert-success')).toBeTruthy()
  })
  it('renders children content', () => {
    const component = shallow(
      <Alert>
        <p>can he be trusted</p>
      </Alert>
    )
    expect(component.children()).toHaveText('can he be trusted')
    expect(component.children()).toHaveHTML('<p>can he be trusted</p>')
  })
  it('renders different alert when type is set', () => {
    const component = shallow(
      <Alert type="danger">
        <p>because I am Batman</p>
      </Alert>
    )
    expect(component).toHaveClassName('alert-danger')
  })
})
