import React, { Component, Fragment } from 'react'
import { Collapse } from 'react-collapse'
import PlusCircle from 'react-feather/dist/icons/plus-circle'
import MinusCircle from 'react-feather/dist/icons/minus-circle'
import ExternalLink from 'react-feather/dist/icons/external-link'
import PropTypes from 'prop-types'

import Chart from '../Chart/Chart'

class CustomerListItem extends Component {
  state = {
    collapsed: false
  }

  handleCollapse = () => {
    this.setState({ collapsed: !this.state.collapsed })
  }

  renderCollapse = () => {
    const { collapsed } = this.state
    return !collapsed ? (
      <Fragment>
        <p className="my-auto"> More...</p>
        <p className="my-auto">
          <PlusCircle className="feather" />
        </p>
      </Fragment>
    ) : (
      <Fragment>
        <p className="my-auto"> Less...</p>
        <p className="my-auto">
          <MinusCircle className="feather" />
        </p>
      </Fragment>
    )
  }

  handleClick = () => {
    const {
      uuid,
      getCustomer,
      history: { push }
    } = this.props

    getCustomer(uuid)
    push(`/customers/${uuid}`)
  }

  render() {
    const { collapsed } = this.state
    return (
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card bg-light mb-3">
          <div className="card-body">
            <div className="d-flex justify-content-between ">
              <h5 className="card-title">
                {this.props.firstName + ' ' + this.props.lastName}
              </h5>
              <span
                onClick={this.handleClick}
                className="text-primary"
                style={{ cursor: 'pointer' }}
              >
                Open <ExternalLink className="feather" />
              </span>
            </div>

            <address className="card-text">
              <strong>{this.props.homeAdress}</strong>
            </address>
            <div
              className="show-chart d-flex justify-content-between align-items-center text-success my-2"
              onClick={this.handleCollapse}
              style={{ cursor: 'pointer' }}
            >
              {this.renderCollapse()}
            </div>
            <Collapse
              isOpened={collapsed}
              springConfig={{ stiffness: 50, damping: 10 }}
            >
              <Chart
                data={[...this.props.consumption[0].data]}
                editable={false}
              />
            </Collapse>
          </div>
        </div>
      </div>
    )
  }
}

CustomerListItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  homeAdress: PropTypes.string.isRequired,
  consumption: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default CustomerListItem
