import React, { Component, Fragment } from 'react'

import { NavBar } from '../src/components/navigation'
import Home from './containers/Home/Home'

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Home />
      </Fragment>
    )
  }
}

export default App
