import React from 'react'
import propTypes from 'prop-types'
import * as FaIcons from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
export default function Header(props) {
  return (
    <nav className={props.mode}>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <a class="navbar-brand" href="#">{props.title}</a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" href="#"><FaIcons.FaAmazon /></ul>
        
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-4 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" to="#" >&nbsp; &nbsp; &nbsp; React Project</a>
            </li>
          </ul>
          <ul className="">

          </ul>
          <ul className="nav justify-content-right">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/Home?page=home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/signup">Registration</NavLink>
        </li>
        </ul>
          
<input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
<label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>

          {props.searchBar ? <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> : ""}
        </div>
     </nav>
    </nav>
  )
}

Header.defaultProps = {
  title: "Your Title here",
  searchBar: true
}

Header.propTypes = {
  title: propTypes.string,
  searchBar: propTypes.bool.isRequired
}
