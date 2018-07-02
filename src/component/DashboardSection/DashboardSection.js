import React, { Component } from 'react'
import PropTypes from 'prop-types'

class DashboardSection extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    console.log(this.props)

    return (
      <div>
        <h2>Section Title</h2>
      </div>
    )
  }
}
export default DashboardSection
