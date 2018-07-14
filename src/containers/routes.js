import React from 'react'
import { AnimatedSwitch, spring } from 'react-router-transition'
import { Route, Redirect } from 'react-router-dom'

import CustomerList from './customer/CustomerList/CustomerList'
import { Section as DashboardSection } from '../components/dashboard/'
import CustomerDetails from './customer/CustomerDetails/CustomerDetails'
import './MainContent/MainContent.css'

const Routes = () => {
  return (
    <AnimatedSwitch
      atEnter={bounceTransition.atEnter}
      atLeave={bounceTransition.atLeave}
      atActive={bounceTransition.atActive}
      mapStyles={mapStyles}
      className="route-wrapper"
    >
      <Route
        exact={true}
        path="/"
        render={() => <Redirect to="/section/customers/" />}
      />
      <Route path="/section/customers/" component={CustomerList} />
      <Route path="/customers/:userID" component={CustomerDetails} />
      <Route path="/section/:sectionId" component={DashboardSection} />
      <Route component={CustomerList} />
    </AnimatedSwitch>
  )
}

const mapStyles = styles => {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`
  }
}

// wrap the `spring` helper to use a bouncy config
const bounce = val => {
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

export default Routes
