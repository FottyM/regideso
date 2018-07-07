import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Calendar, ExternalLink, Share2 } from 'react-feather'
import { Route } from 'react-router-dom'
import { AnimatedSwitch, spring, AnimatedRoute } from 'react-router-transition'
import DashboardSection from '../../component/DashboardSection/DashboardSection'
import CustomerList from '../../component/CustomerList/CustomerList'
import './MainContent.css'

class MainContent extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
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
        <AnimatedSwitch
          atEnter={bounceTransition.atEnter}
          atLeave={bounceTransition.atLeave}
          atActive={bounceTransition.atActive}
          mapStyles={mapStyles}
          className="route-wrapper"
        >
          <Route exact={true} path="/" component={DashboardSection} />
          <Route path="/section/customers/" component={CustomerList} />
          <Route path="/section/:sectionId" component={DashboardSection} />
        </AnimatedSwitch>
      </main>
    )
  }
}

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`
  }
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22
  })
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8)
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1)
  }
}

export default MainContent
