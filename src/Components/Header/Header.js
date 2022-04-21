import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='container-fluid'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Home</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" >Category Page</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <form className="d-flex align-items-center">
                    <a className="nav-link" href="#">Login</a>
                    <a className="nav-link" href="#">Logout</a>
                    <ion-icon class="icon-user" name="person-circle-outline"></ion-icon>
                </form>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header