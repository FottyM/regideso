import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { OrbitSpinner } from 'react-epic-spinners'
const Spinner = ({ loading, children }) => {
  return loading ? (
    <div
      className="d-flex w-100 justify-content-center align-items-center flex-column"
      style={{ height: '50vh' }}
    >
      <OrbitSpinner color="red" />
      <h4 className="text-danger py-3">Loading...</h4>
    </div>
  ) : (
    <Fragment>{children}</Fragment>
  )
}

Spinner.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

export default Spinner
