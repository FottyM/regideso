import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ArrowLeftCircle from 'react-feather/dist/icons/arrow-left-circle'
import RefreshCcw from 'react-feather/dist/icons/refresh-ccw'
import moment from 'moment'
import isEmpty from 'lodash/isEmpty'

import { Chart } from '../../../components/customer/'
import { fecthingOneRequested, fecthingRequested } from '../../../actions'
import { Spinner, Alert } from '../../../components/utilities/'
import { hexToRgbA } from '../../../helpers/'

class CustomerDetails extends Component {
  state = {
    color: 'rgba(221, 75, 57, 0.3)',
    type: 'bar'
  }

  componentDidMount = () => {
    const {
      match: { params },
      history
    } = this.props

    if (isEmpty(params.userID)) {
      history.push('/')
    } else {
      this.props.dispatch(fecthingRequested())
      this.props.dispatch(fecthingOneRequested(params.userID))
    }
  }

  renderAlert() {
    const { error } = this.props
    return !isEmpty(error) ? (
      <Alert type="danger">
        <p> {error.message} </p>
      </Alert>
    ) : null
  }

  reloadHanlder() {
    const {
      match: { params }
    } = this.props

    if (!isEmpty(params.userID)) {
      this.props.dispatch(fecthingRequested())
      this.props.dispatch(fecthingOneRequested(params.userID))
    }
  }

  changeColorHandler({ target }) {
    if (target.name === 'color') {
      const color = hexToRgbA(target.value)
      this.setState({ color })
    } else {
      this.setState(prevState => ({ ...prevState, type: target.value }))
    }
  }
  renderGoBack() {
    const { history } = this.props
    return (
      <button
        className="btn btn-outline-primary"
        style={{ cursor: 'pointer' }}
        onClick={() => history.goBack()}
      >
        <i>
          <ArrowLeftCircle className="feather" /> Back
        </i>
      </button>
    )
  }
  render() {
    const { customer } = this.props
    const { color, type } = this.state

    return (
      <Spinner loading={this.props.loading}>
        <div className="col-10">
          {!isEmpty(customer) ? (
            <Fragment>
              <div className="d-flex align-items-center border-0  border border-bottom ">
                {this.renderGoBack()}
                <h3 className="mb-0 px-3">
                  {customer.firstName} {customer.lastName}
                </h3>
              </div>
              <h3>
                <address className="text-info py-3">
                  {customer.homeAdress} <br />
                  {moment(customer.consumption.period).format('DD.MM.YYYY')}
                </address>
              </h3>
              <Fragment>
                <Chart
                  title="Chart"
                  data={this.props.customer.consumption[0].data}
                  type={type}
                  color={color}
                  changeColorHandler={this.changeColorHandler.bind(this)}
                />
              </Fragment>
            </Fragment>
          ) : (
            <Fragment>
              {this.renderAlert()}
              <div className="d-flex justify-content-around align-content-around">
                <div>{this.renderGoBack()}</div>
                <div>
                  <button
                    className="btn btn-outline-success"
                    onClick={this.reloadHanlder.bind(this)}
                  >
                    Refresh <RefreshCcw className="feather" />
                  </button>
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </Spinner>
    )
  }
}

CustomerDetails.propTypes = {
  match: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  customer: state.customers.current,
  loading: state.customers.loading,
  error: state.customers.error
})

export default connect(mapStateToProps)(CustomerDetails)
