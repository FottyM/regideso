import React from 'react'
import { Calendar, ExternalLink, Share2 } from 'react-feather'

import Routes from '../routes'
import './MainContent.css'

const MainContent = () => {
  return (
    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
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
      <Routes />
    </main>
  )
}

export default MainContent
