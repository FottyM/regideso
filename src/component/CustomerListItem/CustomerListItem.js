import React, { Component, createRef } from 'react'
import { Collapse } from 'react-motion'
import { Line } from 'react-chartjs-2'
import moment from 'moment'
import PropTypes from 'prop-types'

class CustomerListItem extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  constructor(props) {
    super(props)
    this.itemRef = createRef()
  }

  handleClick(e) {
    console.log(e)
  }

  render() {
    return (
      <div
        className="col-12 col-md-6 col-lg-4 bg-light"
        key={this.props.uuid}
        ref={this.itemRef}
        onClick={this.handleClick}
      >
        <div className="card bg-light mb-3">
          <div className="card-body">
            <h5 className="card-title">
              {this.props.firstName + ' ' + this.props.lastName}
            </h5>
            <address className="card-text">
              <strong>{this.props.homeAdress}</strong>
            </address>
            <Collapse isOpened={true || false}>
              <Line
                data={{
                  labels: Array(24)
                    .fill('')
                    .map((x, i) => i + 1 + 'h'),
                  datasets: [
                    {
                      label:
                        'Wather consumption for ' +
                        moment().format('DD.MM.YYYY'),
                      backgroundColor: 'transparent',
                      borderColor: 'red',
                      borderWidth: 1,
                      data: [...this.props.consumption[0].data]
                    }
                  ]
                }}
              />
            </Collapse>
          </div>
        </div>
      </div>
    )
  }
}

export default CustomerListItem
