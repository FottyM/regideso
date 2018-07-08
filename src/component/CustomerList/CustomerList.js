import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getCustomersReading } from '../../actions/index'
import CustomerListItem from '../CustomerListItem/CustomerListItem'

const fetchData = () =>
  fetch(`http://localhost:4000/customers`).then(res => res.json())
class CustomerList extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
  static defaultProps = {
    fetchData
  }

  state = {
    data: null,
    error: null
  }

  componentDidMount() {
    this.props.getReading()
  }

  render() {
    const { data, error } = this.state
    const { match } = this.props
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <h2 className="border-top-0 border-left-0 border-right-0  border border-dark mb-3">
              Customers List
            </h2>
            {error && (
              <div className="alert alert-danger  fade show" role="alert">
                <strong>Holy guacamole!</strong> {error.message}
              </div>
            )}
          </div>
        </div>
        <div className="row">
          {data &&
            data.map(element => (
              <CustomerListItem {...element} key={element.uuid} match={match} />
            ))}
        </div>
      </div>
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
