import Axios from 'axios';
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavbarPrimary from '../Navbar/NavbarPrimary';

import NavbarBLogin from '../Navbar/NavbarBLogin';

import logoon from './logoon.png';




function Login() {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState([]);
    const [custId, setCustId] = useState("");
    const [custName, setCustName] = useState("");
    const [custPass, setCustPass] = useState("");
    const [custEmail, setCustEmail] = useState("");
    const [custPhone, setCustPhone] = useState("");
    const [custAddress, setCustAddress] = useState("");
    const[pincode,setPincode] =useState("")
   

    function LoginForm() {


      const setNeed = (custId, custName) => {
        console.log(custId);


        localStorage.setItem("custid11", custId);
        localStorage.setItem("custname", custName);
       
    }


        Axios.get(`http://localhost:61132/api/Customers/login/${custEmail}/${custPass}`)
            .then(response => {
                console.log(response.data)
                if (response.data.custName === undefined) {
                    alert("Invalid credentials")

                }
                else {
                  
                    window.location.href = `productsList/${response.data.custId}`
                }
            })
    }
    return (
        <>
        <NavbarBLogin/>
        <br/>
        
         <section className="vh-100">
      <div className="container-fluid h-custom ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-7">
            <img src={logoon} />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <div class="container py-5 h-100">
          <div class="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
          <div class="card-body p-4 p-md-5">
       
            <form>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3">Username</label>
                <input type="username" id="form3Example3" className="form-control form-control-lg"
                 onChange={e => { setCustEmail(e.target.value) }} value={custEmail}
                   placeholder="Enter a valid username" />
              </div>


              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="form3Example4">Password</label>
                <input type="password" id="form3Example4" className="form-control form-control-lg"
                 placeholder="Password"
                 onChange={e => { setCustPass(e.target.value) }} value={custPass} />

              </div>

              <div className="d-flex justify-content-between align-items-center">

                <div className="form-check mb-0">

                  <label className="form" htmlFor="form2Example3">

                  </label>
                </div>
                <a href="/RegisterCustomer" className="text-body">Don't have Account? Register</a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">



                <button  type="button" className="btn btn-primary btn-lg"

                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }} onClick={LoginForm.bind(this, custEmail, custPass)}>Login</button>



              </div>



            </form>
            </div>
            </div>
            </div>

          </div>

        </div>

      </div>







    </section>


         
        </>
    );



}
export default Login;