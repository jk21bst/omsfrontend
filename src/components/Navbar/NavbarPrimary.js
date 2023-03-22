import React from "react";
// import icon from './../icon.png';
import { ReactDOM } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './../Navbar/NavbarPrimary.css';
import icon from './icon.png';

function NavbarPrimary() {

  const custidgot = localStorage.getItem('custid11');
  const custnamegot = localStorage.getItem('custname');
 

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
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link" href="">AboutUs</a>
              </li>
              
              <li className="nav-item mx-8">
                <a className="nav-link" href="/OrderList/${CustId}">Your Orders</a>
              </li>
             
              
              <li className="nav-item">
              <div className="nav-item ">
              <Link className="btn btn-primary" aria-current="page" to="/">Logout</Link>
            </div>
               
              </li>
             

            </ul>

          
           
          </div>
        </div>
      </nav>
   
      

      <Outlet/>

      <br/>
      


   

    </div>
    
  )
}
export default NavbarPrimary;