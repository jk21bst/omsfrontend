import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import NavbarPrimary from '../Navbar/NavbarPrimary';




function TempItemsList() {

    const navigate = useNavigate();
    const [tempItems, setTempItems] = useState([]);
    const [tempProductId, setTempProductId] = useState("");
    
    const [productCategory, setProductCategory] = useState("");
    const [productCost, setproductCost] = useState("");
    const [totalPrice, setTotalPrice] = useState("");
    const [discount, setDiscount] = useState("");
    const [customer, setCustomer] = useState([]);
    
    const [custName, setCustName] = useState("");
    const [custPass, setCustPass] = useState("");
    const [custEmail, setCustEmail] = useState("");
    const [custPhone, setCustPhone] = useState("");
    const [custAltPhone, setCustAltPhone] = useState("");
    const [custCity, setCustCity] = useState("");
    const [custState, setCustState] = useState("");
    const [custAddress, setCustAddress] = useState("");
    const [custBalance, setCustBalance] = useState("");
    const [order, setOrder] = useState([]);
    const [orderId, setOrderId] = useState("");
    const [orderStatus, setOrderStatus] = useState("");
    const [orderQuantity, setOrderQuantity] = useState("");
    const [orderCost, setOrderCost] = useState("");
    const [orderDate, setOrderDate] = useState("");
    const [orderTotal, setOrderTotal] = useState("");
    const [price, setPrice] = useState("");
    const [count, setCount] = useState("");
    const [orderTotalQuantity, setOrderTotalQuantity] = useState("");
    const {custId} = useParams();

    useEffect(() => {
       Axios.get(`http://localhost:61132/api/Customers/${custId}`)
            .then(response => {
                console.log(response.data)
                setCustomer(response.data)
            })
        Axios.get(`http://localhost:61132/api/TempItems/customer/${custId}`)
            .then(response => {
                console.log(response.data)
                setTempItems(response.data)
            })
        setPrice(TotalPrice);
        console.log("Price",price)
        setCount(tempItems.length)
        setOrderTotalQuantity(TotalQuantity)
        console.log("Total Quantity",orderTotalQuantity)
    }, [])

    function TotalPrice() {
        let price = 0
        tempItems.forEach(item => {
            price = (price + item.totalPrice)
        })
        return price
        
    }
    function TotalQuantity() {
        let totalQuantity = 0
        tempItems.forEach(item => {
            totalQuantity = (totalQuantity + (item.totalPrice/item.unitPrice))
        })
        
        return parseInt(totalQuantity)
    }

    
   
      const emailString = "CustomerId: " + custId.toString() + ". Your order containig order of amount " + orderCost.toString() + " is  Placed " ;

    function PlaceOrder() {
        
        alert("Place Order")
        let orderStatus = 'Placed';
        let orderTotal = count;
        let orderCost = price;
        let orderQuantity = orderTotalQuantity;
        let orderDate = new Date().toJSON();
        let orderItems = tempItems;
       
        let orderData = { orderStatus, orderQuantity, orderCost, orderDate, orderTotal, custId }
        console.log(orderData)
       Axios.post(`http://localhost:61132/api/Orders/addn`,orderData)
            .then(response => {
                console.log("inserted order", +response.data.orderId)
                let oId = response.data.orderId;
                if (oId != 0) {
                    tempItems && (tempItems).forEach(item => {
                        let orderId = oId;
                        let productId = item.productId
                        
                        let quantity = item.totalPrice / item.unitPrice;
                        let unitPrice = item.unitPrice;
                        let totalPrice = item.totalPrice;
                        let orderStatus = 'Placed';
                        let data = { orderId, productId,  quantity, unitPrice, totalPrice, orderStatus,custId,orderStatus }
                        console.log(data)
                        Axios.post(`http://localhost:61132/api/OrderItems/add`, data)
                            .then(response => {
                                console.log(response.data)
                               
                            })
                    });
                    alert("Added all the orderItems")
                    tempItems.forEach(item => {
                        Axios.delete(`http://localhost:61132/api/TempItems/${item.tempProductId}`)
                            .then(response => {
                                console.log(response.data)
                            })
                    })
                   

                    function sendEmail(e) {
                        e.preventDefault();    
                    
                        emailjs.sendForm('service_0jx5vhc', 'template_1wosvat', e.target, 'OzoGzYkLZVAmWl6eU')
                          .then((result) => {
                              window.location.reload()   
                          }, (error) => {
                              console.log(error.text);
                          });
                      }

                      
                    


                    window.location.href=`/orderItemList/${custId}/${oId}`
                }
            })

       
        
       
        
    }


    const tempItem = tempItems.map((it, index) => {
        return (
            
            <tr key={it.tempProductId}>
                <td>{it.tempProductId}</td>
                <td>{it.productId}</td>
                <td>{it.productCategory}</td>
                
                <td>{it.unitPrice}</td>
                <td>{it.totalPrice  }</td>
               
                <td>{customer.custName}</td>
                <td><button className="btn btn-warning">Remove</button></td>
                
            </tr>
        )
    })
   


    return (
        <>
        <NavbarPrimary/>
         <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Cart List Items</h3>
        <section class="vh-500 gradient-custom">
        <div class="container py-5 h-100">
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th>ReferenceId</th>
                        <th>ProductId</th>
                        <th>ProductCategory</th>
                        
                        <th>UnitPrice</th>
                        <th>TotalPrice</th>
                        
                        <th>CustomerName</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{tempItem}</tbody>
                
            </table>
            <td>
                <button type="submit" className="btn btn-btn btn-info" style={{ marginLeft: "1000px", marginRight: "5px" }} onClick={() => navigate(`/productsList/${custId}`)}>AddMore</button>
                <button type="submit" className="btn btn-success" style={{ marginRight: "5px" }} onClick={PlaceOrder}>PlaceOrder</button>
            </td>
            </div>
            </section>

        </>
        )
}

export default TempItemsList;