import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Calendar, ExternalLink, Share2 } from 'react-feather'
import { Route } from 'react-router-dom'
import DashboardSection from '../../component/DashboardSection/DashboardSection'
import { SSL_OP_PKCS1_CHECK_2 } from 'constants'

export default class MainContent extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
          <h1 className="h2">Dashboard 🙄</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group mr-2">
              <button className="btn btn-sm btn-outline-secondary">
                <Share2 className="feather" />
                Share
              </button>
              <button className="btn btn-sm btn-outline-secondary">
                <ExternalLink className="feather" />
                Export
              </button>
            </div>
            <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
              <Calendar className="feather" />
              This week
            </button>
          </div>
        </div>
        <div>
          <Route exact={true} path="/" component={DashboardSection} />
          <Route
            path="/section/:sectionId"
            render={props => {
              return <DashboardSection {...props} />
            }}
          />
        </div>
      </main>
    )
  }
}
