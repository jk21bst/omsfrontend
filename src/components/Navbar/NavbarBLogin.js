import React from "react";

import { ReactDOM } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './../Navbar/NavbarPrimary.css';
import icon from './icon.png';

function NavbarBLogin() {

  return (
     
    <div>
      <nav className="navbar navbar-expand-lg bg-light mx-6">
        <div className="container-fluid">
          <nav className="navbar bg-light">
            <div className="container">
              <a className="navbar-brand" href="/">
                <img src={icon} alt="..." width="30" height="24" />
                <p>Shoeasy</p>

              </a>
            </div>
          </nav>
         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
              <li className="nav-item">
                <a className="nav-link" href="/"> Home</a>
              </li>
             

            </ul>

            <div className="nav-item mx-2">
              <Link className="btn btn-primary" aria-current="page" to="/RegisterCustomer">Register to SHOP</Link>
            </div>

            <div className="nav-item mx-2">
              <Link className="btn btn-primary" aria-current="page" to="/Admin">Admin Login</Link>
            </div>

          </div>
        </div>
      </nav>
     
      

      <Outlet/>

      <br/>
      


   

    </div>
    
  )
}
export default NavbarBLogin;