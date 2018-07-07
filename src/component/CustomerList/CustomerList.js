import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import { Collapse } from 'react-collapse'
import moment from 'moment'
import PropTypes from 'prop-types'
import PlusCircle from 'react-feather/dist/icons/plus-circle'
import MinusCircle from 'react-feather/dist/icons/minus-circle'

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
    collapsed: true,
    error: ''
  }

  async componentDidMount() {
    try {
      const data = await this.props.fetchData()
      this.setState({ data })
      console.log(JSON.stringify(data))
    } catch (error) {
      this.setState({ error })
    }
  }

  render() {
    const { data, collapsed, error } = this.state
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
              <div
                className="col-12 col-md-6 col-lg-4"
                key={element.uuid}
                onClick={e => console.log(e.target.value)}
              >
                <div className="card bg-light mb-3">
                  <div className="card-body">
                    <h5 className="card-title">
                      {element.firstName + ' ' + element.lastName}
                    </h5>
                    <address className="card-text">
                      <strong>{element.homeAdress}</strong>
                    </address>
                    <h6
                      className=" d-flex justify-content-between align-items-center text-danger my-3"
                      onClick={() => this.setState({ collapsed: !collapsed })}
                      style={{ cursor: 'pointer' }}
                    >
                      <span>Show/Hide chart</span>
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
                      <Line
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
                                'Wather consumption for ' +
                                moment().format('DD.MM.YYYY'),
                              backgroundColor: 'purple',
                              borderColor: 'purple',
                              borderWidth: 1,
                              data: [...element.consumption[0].data]
                            }
                          ]
                        }}
                      />
                    </Collapse>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    )
  }
}

export default CustomerList
