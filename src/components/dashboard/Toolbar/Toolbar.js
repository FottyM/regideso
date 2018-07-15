import React from 'react'
import Share2 from 'react-feather/dist/icons/share-2'
import ExternalLink from 'react-feather/dist/icons/external-link'
import Calendar from 'react-feather/dist/icons/calendar'

const Toolbar = () => {
  return (
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
  )
}

export default Toolbar
