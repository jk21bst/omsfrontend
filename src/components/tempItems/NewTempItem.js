import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import NavbarPrimary from '../Navbar/NavbarPrimary';

function NewTempItem() {
    const navigate = useNavigate();
    const [orderItemId, setOrderItemId] = useState([]);
    const [quantity, setQuantity] = useState("");
    const [unitPrice, setUnitPrice] = useState("");
    const [totalPrice, setTotalPrice] = useState("");
    const [orderStatus, setOrderStatus] = useState("")
    const [item, setItem] = useState([]);
  const [productCategory, setProductCategory] = useState("");
    const [productQuantity, setProductQuantity] = useState("");
    const [productCost, setProductCost] = useState("");
    const [productUrl, setProductUrl] = useState("");
    const [tempItems, setTempItems] = useState([]);
    const [tempItemId, setTempItemId] = useState("");
    const [customer, setCustomer] = useState([]);
    const [custName, setCustName] = useState("");
    const [custPass, setCustPass] = useState("");
    const [custEmail, setCustEmail] = useState("");
    const [custPhone, setCustPhone] = useState("");
    const [custAddress, setCustAddress] = useState("");
   
    const[pinCode,setPinCode] = useState("");
    
    const { custId,productId } = useParams();
    console.log(productId)


    useEffect(() => {
        Axios.get(`http://localhost:61132/api/Customers/${custId}`)
            .then(response => {
                console.log(response.data)
                setCustomer(response.data)
                


            })

        Axios.get(`http://localhost:61132/api/Products/${productId}`)
            .then(response => {
                console.log(response.data)
                setItem(response.data)
                
                

            })
    }, [])

    function AddTempItem() {
         alert(quantity)
        const tempItem = { productCategory: item.productCategory, unitPrice:item.productCost, totalprice: item.productCost*quantity,  custId: custId, productId }
        console.log(tempItem)
        Axios.post(`http://localhost:61132/api/TempItems/add`, tempItem)
            .then(response => {
                console.log(response.data)
                alert("Successfully added")
                window.location.href=`/tempItemList/${custId}`
            })
       
      
    }
    return (
        <>
        <NavbarPrimary/>



<div class="container">
                <div class="row">
                    <div class="col-12">
                        <table class="table table-image">
                            <thead>
                                <tr>
                                    <th scope="col">ItemId</th>
                                    <th scope="col">Product ID</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">URL </th>
                                    <th scope="col">Available Quantity</th>
                                    <th scope="col">UnitPrice</th>
                                    <th scope="col">Enter Quantity </th>
                                    <th scope="col">Total Price </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                  
                                    <td>{productId}</td>
                                    <td>{item.productCategory}</td>
                                    <td class="w-25">
                                        <img src={item.productUrl} class="img-fluid img-thumbnail" alt="image" />
                                    </td>
                                   
                                    <td>{item.productQuantity}</td>
                                    <td>{item.productCost}</td>
                                   
                                    <td>

                                    <div class="app-form-group">
                                      
                                        <input class="app-form-control" value={quantity} style={{ textAlign: "center" }} onChange={e => { setQuantity(e.target.value) }} />
                                    </div>
                                        
                                    </td>

                                    <td>
                                    <div class="app-form-group">
                                       
                                        <input class="app-form-control" value={quantity * item.productCost} style={{ textAlign: "center" }} onChange={e => { setQuantity(e.target.value) }} />
                                    </div>
                                    </td>
                                    </tr>

                             

                                  

                                        
                               

                            </tbody>
                        </table>
                        
                        <button class="btn-primary mx-4" type="submit" onClick={AddTempItem}>Add </button>
                                  

                                
                                  <button class="btn-warning" onClick={()=>navigate(`/itemsList/${custId}`)}> Cancel </button>
                    </div>
                </div>
            </div>







                   
        </>
        )
}
export default NewTempItem;