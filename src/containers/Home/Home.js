import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SideBar from '../../component/SideBar/SideBar'
import MainContent from '../MainContent/MainContent'

export default class Home extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <MainContent />
        </div>
      </div>
    )
  }
}
