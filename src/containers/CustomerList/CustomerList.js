import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { getCustomersReading } from '../../actions/index'
import CustomerListItem from '../CustomerListItem/CustomerListItem'
import Spinner from '../Spinner/Spinner'
import ErrorCard from '../ErrorCard/ErrorCard'

// const fetchData = () =>
// fetch(`http://localhost:4000/customers`).then(res => res.json())
class CustomerList extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
  // static defaultProps = {
  //   fetchData
  // }

  // state = {
  //   data: null,
  //   error: null
  // }

  componentDidMount() {
    this.props.getReading()
  }

  render() {
    const {
      customers: { data, error },
      match,
      history
    } = this.props

    return (
      <Spinner loading={data === null ? true : false}>
        <div className="row">
          <div className="col-12">
            <h2 className="border-top-0 border-left-0 border-right-0  border border-light pb-3 mb-3">
              Customers List
            </h2>
            {error !== null && <ErrorCard message={error.message} />}
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
