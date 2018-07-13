import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Bar } from 'react-chartjs-2'
import ArrowLeftCircle from 'react-feather/dist/icons/arrow-left-circle'
import moment from 'moment'

import { getCurrentCustomer } from '../../../actions'
import { Spinner } from '../../utilities'

class CustomerDetails extends Component {
  componentDidMount() {
    const {
      match: {
        params: { userID }
      }
    } = this.props
    this.props.getCustomer(userID)
  }

  render() {
    const { history } = this.props
    // const {
    //   customer: { current }
    // } = this.props
    // console.log()

    console.log(this.props.customer)

    return (
      <Spinner loading={this.props.customer === null ? true : false}>
        <div className="col-10">
          <span
            className="text-primary"
            style={{ cursor: 'pointer' }}
            onClick={e => history.goBack()}
          >
            <i>
              <ArrowLeftCircle className="feather" /> Back
            </i>
          </span>

          <h2 className="py-3"> John Doe</h2>

          <address>Some address</address>
          <h3>Reading</h3>
          <div>
            <Bar
              options={{
                maintainAspectRatio: true
              }}
              data={{
                labels: Array(24)
                  .fill('')
                  .map((x, i) => i + 1 + 'h'),
                datasets: [
                  {
                    label:
                      'Water consumption for ' + moment().format('DD.MM.YYYY'),
                    backgroundColor: 'rgba(221, 75, 57,.3)',
                    borderColor: 'rgba(221, 75, 57, 1)',
                    borderWidth: 0.5,
                    data: [...this.props.customer.consumption[0].data]
                  }
                ]
              }}
            />
          </div>
        </div>
      </Spinner>
    )
  }
}

CustomerDetails.propTypes = {
  match: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  customer: state.customers.current
})

const mapDispatchToProps = dispatch => ({
  getCustomer: uuid => dispatch(getCurrentCustomer(uuid))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerDetails)
