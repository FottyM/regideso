import React from 'react'
import * as Icon from 'react-feather'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className="nav-link" to="/section/customers">
              <Icon.Users className="feather" />
              Customers
            </NavLink>
          </li>
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
            <NavLink className="nav-link" to="/section/reports">
              <Icon.PieChart className="feather" />
              Reports
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

SideBar.propTypes = {}

export default SideBar
