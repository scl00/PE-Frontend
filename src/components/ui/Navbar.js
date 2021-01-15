import React from 'react';
import './style.css';

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar navbar-dark">
        <p className="navbar-brand" href="#">
          <img src="unica2.png" width="60" height="40" alt="" loading="lazy" />
        </p>
        <p className="navbar-brand" href="#">Cursos UNICA</p>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <p className="nav-link" href="#">Home <span className="sr-only">(current)</span></p>
            </li>
            <li className="nav-item">
              <p className="nav-link" href="#">Features</p>
            </li>
            <li className="nav-item">
              <p className="nav-link" href="#">Pricing</p>
            </li>
            <li className="nav-item dropdown">
              <p className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
              </p>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <p className="dropdown-item" href="#">Action</p>
                <p className="dropdown-item" href="#">Another action</p>
                <p className="dropdown-item" href="#">Something else here</p>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
