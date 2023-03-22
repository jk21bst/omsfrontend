import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Moment from 'moment';
import NavbarPrimary from '../Navbar/NavbarPrimary';
import {Link } from 'react-router-dom';

function OrderList() {

    const navigate = useNavigate();
    const [order, setOrder] = useState([]);
    const [orderId, setOrderId] = useState("");
    const [orderStatus, setOrderStatus] = useState("");
    const [orderQuantity, setOrderQuantity] = useState("");
    const [orderCost, setOrderCost] = useState("");
    const [orderDate, setOrderDate] = useState("");
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
    const { custId } = useParams();


    useEffect(() => {
        Axios.get(`http://localhost:61132/api/Orders`)
            .then(response => {
                console.log(response.data)
                setOrder(response.data)
            })

        Axios.get(`http://localhost:61132/api/Customers/${custId}`)
            .then(response => {
                console.log(response.data)
                setCustomer(response.data)
            })
    },[])

    const orders = order.map((ord, index) => {
        return (
            <tr key={ord.orderId}>
                <td>{ord.orderId}</td>
                <td>{ord.orderStatus}</td>
                <td>{ord.orderQuantity}</td>
                <td>{ord.orderCost}</td>
                <td>{Moment(ord.orderDate).format("DD-MM-YYYY")}</td>
                <td>{ord.orderTotal}</td>
                <td>{customer.custName}</td>
                <td>
                    <button className="btn btn-outline-dark" onClick={()=>navigate(`/orderItemList/${custId}/${ord.orderId}`)}>View </button>
                <button className="btn btn-outline-dark" style={{ marginLeft: "5px" }}>Back</button>
            </td>
            </tr>
            )
    })

    return (
        <>
        <NavbarPrimary/>
            <table className="table table-striped">
                <thead className='thead-dark'>
                    <tr>
                        <th>OrderId</th>
                        <th>OrderStatus</th>
                        <th>Quantity</th>
                        <th>Cost</th>
                        <th>Date</th>
                        <th>OrderTotal</th>
                        <th>CustomerName</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{orders}</tbody>

            </table>
            <div className="nav-item ">
              <Link className="btn btn-primary" aria-current="page" to="/productList/${custId}">Bac To Products</Link>
            </div>
            
        </>
        )
}

export default OrderList;