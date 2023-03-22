import Axios from 'axios';
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './RegisterCustomer.css';





function RegisterCustomer() {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState([]);
    const [custId, setCustId] = useState("");
    const [custName, setCustName] = useState("");
    const [custPass, setCustPass] = useState("");
    const [custEmail, setCustEmail] = useState("");
    const [custPhone, setCustPhone] = useState("");
    
    const [custAddress, setCustAddress] = useState("");
    const [pinCode, setPinCode] = useState("");
    



    function AddCustomer() {
        const customer = { custName, custPass, custEmail, custPhone,   custAddress, pinCode }
        console.log(customer)
        Axios.post(`http://localhost:61132/api/Customers/add`, customer)
            .then(response => {
                console.log(response.data)
            })
            window.location.href='/';
     
    }
    return (
        <>

<section class="vh-500 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
          <div class="card-body p-4 p-md-5">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
            <form>

              <div class="row">
                <div class="col-md-10 mb-8">

                  <div class="form-outline">
                    <input  type="text" value={custName} onChange={e => { setCustName(e.target.value) }}class="form-control form-control-xxl" />
                    <label class="form-label" for="custname">Full Name</label>
                  </div>

                </div>
                <div class="col-md-10 mb-4">

              
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-4 d-flex align-items-center">

                  <div class="form-outline datepicker w-100">
                    <input type="number" class="form-control form-control-lg" value={custPhone} onChange={e => { setCustPhone(e.target.value) }} />
                    <label for="custPhone" class="form-label">Mobile No.</label>
                  </div>

                </div>


                <div class="row">
                <div class="col-md-10 mb-4 d-flex align-items-center">

                  <div class="form-outline datepicker w-100">
                    <input type="text" class="form-control form-control-lg" value={custAddress} onChange={e => { setCustAddress(e.target.value) }} />
                    <label for="custAddress" class="form-label">Full Address</label>
                  </div>

                </div>


                <div class="row">
                <div class="col-md-12 mb-4 d-flex align-items-center">

                  <div class="form-outline datepicker w-100">
                    <input type="text" class="form-control form-control-lg" value={custEmail} onChange={e => { setCustEmail(e.target.value) }}/>
                    <label for="custEmail" class="form-label">Email</label>
                  </div>

                </div>
                
               
              </div>

              <div class="row">
                <div class="col-md-10 mb-4 pb-2">

                  <div class="form-outline">
                    <input type="password" value={custPass} onChange={e => { setCustPass(e.target.value) }} class="form-control form-control-lg" />
                    <label class="form-label" for="custPass">Password</label>
                  </div>


                </div>
                
                <div class="col-md-6 mb-4 pb-2">
                <div class="form-outline">
                    <input type="text" value={pinCode} onChange={e => { setPinCode(e.target.value) }} class="form-control form-control-lg" />
                    <label class="form-label" for="pinCode">Pincode</label>
                  </div>

                

                </div>
              </div>
              <br/>




              <div class="mt-4 pt-2 my-6">
                <input class="btn btn-primary btn-lg" type="submit" onClick= {AddCustomer}  value="Register" />
              </div>
</div></div>
            </form>
           
            
        
        </div>
      </div>
    </div>
  </div>
  </div>
</section>
</>

   
    )
}
export default RegisterCustomer;