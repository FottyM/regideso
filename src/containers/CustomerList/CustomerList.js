import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { getCustomersReading } from '../../actions/index'
import { CustomerListItem } from '../../components/customer'
import { Alert, Spinner } from '../../components/utilities/index'

class CustomerList extends Component {
  componentDidMount() {
    this.props.getReading()
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
            {'message' in error && (
              <Alert type="danger">
                <p>
                  <strong>{error.message}</strong>
                </p>
              </Alert>
            )}
          </div>
        </div>
        <div className="row">
          {data &&
            data.map(element => (
              <CustomerListItem
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

const mapStateToProps = state => ({
  customers: state.customers
})

const mapDispatchToProps = dispatch => ({
  getReading: () => dispatch(getCustomersReading())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerList)
