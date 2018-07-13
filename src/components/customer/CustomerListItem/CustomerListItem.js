import React, { Component, createRef } from 'react'
import { Collapse } from 'react-collapse'
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2'
import { Link } from 'react-router-dom'
import PlusCircle from 'react-feather/dist/icons/plus-circle'
import MinusCircle from 'react-feather/dist/icons/minus-circle'
import ExternalLink from 'react-feather/dist/icons/external-link'

import moment from 'moment'
import PropTypes from 'prop-types'

class CustomerListItem extends Component {
  state = {
    collapsed: false
  }

  render() {
    const { collapsed } = this.state
    const { uuid } = this.props
    return (
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card bg-light mb-3">
          <div className="card-body">
            <h5 className="card-title">
              {this.props.firstName + ' ' + this.props.lastName}
            </h5>
            <address className="card-text">
              <strong>{this.props.homeAdress}</strong>
            </address>
            <h6
              className="show-chart d-flex justify-content-between align-items-center text-danger my-3"
              onClick={() => this.setState({ collapsed: !collapsed })}
              style={{ cursor: 'pointer' }}
            >
              <span>More...</span>
              <p className="d-flex align-items-center m-0">
                {!collapsed ? (
                  <PlusCircle className="feather" />
                ) : (
                  <MinusCircle className="feather" />
                )}
              </p>
            </h6>
            <Collapse
              isOpened={collapsed}
              springConfig={{ stiffness: 100, damping: 20 }}
            >
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
                        'Water consumption for ' +
                        moment().format('DD.MM.YYYY'),
                      backgroundColor: 'rgba(221, 75, 57,.3)',
                      borderColor: 'rgba(221, 75, 57, 1)',
                      borderWidth: 0.5,
                      data: [...this.props.consumption[0].data]
                    }
                  ]
                }}
              />
            </Collapse>
            <Link to={`/customers/${uuid}`} className="btn btn-info btn-block">
              Open <ExternalLink className="feather" />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
export default CustomerListItem
