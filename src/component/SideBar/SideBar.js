import React from 'react';
import * as Icon from 'react-feather';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className="nav-link" to="/section/home">
              <Icon.Home className="feather" />
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/section/order">
              <Icon.Book className="feather" />
              Order
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/section/customers">
              <Icon.Users className="feather" />
              Customers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/section/reports">
              <Icon.PieChart className="feather" />
              Reports
            </NavLink>
          </li>
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Saved reports</span>
          <NavLink
            className="d-flex align-items-center text-muted"
            to="/section/saved-report"
          >
            <Icon.PlusCircle className="feather" />
          </NavLink>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <NavLink className="nav-link" to="/section/today">
              <Icon.BarChart className="feather" />
              Today
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/section/current-month">
              <Icon.BarChart2 className="feather" />
              Current month
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/section/last-quarter">
              <Icon.Archive className="feather" />
              Last quarter
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
};

SideBar.propTypes = {}

export default SideBar
