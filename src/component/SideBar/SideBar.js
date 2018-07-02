import React from 'react'
import PropTypes from 'prop-types'
import * as Icon from 'react-feather'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/section/home">
              <Icon.Home className="feather" />
              Dashboard <span className="sr-only">(current) </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/section/order">
              <Icon.Book className="feather" />
              Order
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/section/customers">
              <Icon.Users className="feather" />
              Customers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/section/reports">
              <Icon.PieChart className="feather" />
              Reports
            </Link>
          </li>
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Saved reports</span>
          <Link
            className="d-flex align-items-center text-muted"
            to="/section/saved-report"
          >
            <Icon.PlusCircle className="feather" />
          </Link>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <Link className="nav-link" to="/section/today">
              <Icon.BarChart className="feather" />
              Today
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/section/current-month">
              <Icon.BarChart2 className="feather" />
              Current month
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/section/last-quarter">
              <Icon.Archive className="feather" />
              Last quarter
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

SideBar.propTypes = {}

export default SideBar
