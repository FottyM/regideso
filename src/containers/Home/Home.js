import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SideBar from '../../component/SideBar/SideBar'
import Main from '../Main/Main'

export default class Home extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <SideBar />
          <Main />
        </div>
      </div>
    )
  }
}
