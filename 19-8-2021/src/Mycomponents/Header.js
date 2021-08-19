import React from 'react'
import propTypes from 'prop-types'
import * as FaIcons from 'react-icons/fa'
export default function Header(props) {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        <ul className="navbar-nav me-auto mb-2 mb-lg-0" href="#"><FaIcons.FaAmazon /></ul>
        
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-4 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#" >&nbsp; &nbsp; &nbsp; React Project</a>
            </li>
          </ul>
          <ul className="">

          </ul>
          <ul className="nav justify-content-right">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Help</a>
        </li>
        </ul>
          
          {props.searchBar ? <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> : ""}
        </div>
     
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
