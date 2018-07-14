import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'

import { getCurrentCustomer, fecthingRequested } from '../../../actions/'

import { CustomerListItem } from '../../../components/customer/'
import { Alert, Spinner } from '../../../components/utilities'

class CustomerList extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fecthingRequested())
  }

  render() {
    const {
      customers: { data, error, loading },
      match,
      history
    } = this.props

    return (
      <Spinner loading={loading}>
        <div className="row">
          <div className="col-12">
            <h2 className="border-top-0 border-left-0 border-right-0  border border-light pb-3 mb-3">
              Customers List
            </h2>
            {!isEmpty(error) && (
              <Alert type="danger">
                <p>
                  Oops!{' '}
                  <span role="img" aria-label="accessible-emoji">
                    😰
                  </span>
                  <strong> {error.message} </strong>
                  please try again
                </p>
              </Alert>
            )}
          </div>
        </div>
        <div className="row">
          {data &&
            data.map(element => (
              <CustomerListItem
                getCustomer={getCurrentCustomer}
                {...element}
                key={element.uuid}
                match={match}
                history={history}
              />
            ))}
        </div>
      </Spinner>
    )
  }
}

CustomerList.propTypes = {
  customers: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  customers: state.customers
})

export default connect(mapStateToProps)(CustomerList)
