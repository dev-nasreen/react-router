import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

export const Navbar = () => {
  return (
    <>
        <div className="row">
          <div className="col-12 mx-auto ">
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
                <div className="container">
                  <Link className="navbar-brand logo" to="/home">League Mania</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 menu">
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
          </div>
        </div>
    </>
  )
}
