import React, { Fragment } from 'react'
import moment from 'moment'
import { Bar } from 'react-chartjs-2'
import PropTypes from 'prop-types'

const Chart = ({ title, changeColorHandler, data, color, type, editable }) => {
  return (
    <Fragment>
      {editable && (
        <Fragment>
          <h5 className="text-center">{title}</h5>
          <form className="form-inline" onChange={changeColorHandler}>
            <div className="form-group m-2">
              <label htmlFor="color">Chart color </label>
              <input className="mx-2" type="color" name="color" id="color" />
            </div>
            <div className="form-group m-2">
              <label htmlFor="chart-type"> Chart type </label>
              <select
                className="form-control mx-2"
                name="chart-type"
                id="chart-type"
              >
                <option value="bar">Bart Char</option>
                <option value="line">Line Chart</option>
              </select>
            </div>
          </form>
        </Fragment>
      )}
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
              label: 'Water consumption for ' + moment().format('DD.MM.YYYY'),
              backgroundColor: color,
              borderColor: 'rgba(221, 75, 57, 1)',
              borderWidth: 0.5,
              data: [...data],
              type: type
            }
          ]
        }}
      />
    </Fragment>
  )
}

Chart.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['line', 'bar']),
  changeColorHandler: PropTypes.func,
  data: PropTypes.array.isRequired,
  color: PropTypes.string,
  editable: PropTypes.bool
}

Chart.defaultProps = {
  editable: true,
  type: 'bar',
  title: '',
  changeColorHandler: null,
  color: 'rgba(221, 75, 57, .3)'
}

export default Chart
