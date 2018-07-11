import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({ children, type }) => {
  return (
    <div className={`alert alert-${type} fade show`} role="alert">
      {children ? children : null}
    </div>
  )
}

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf([
    'success',
    'primary',
    'danger',
    'secondary',
    'warning',
    'light',
    'dark'
  ])
}

Alert.defaultProps = {
  type: 'success'
}

export default Alert
