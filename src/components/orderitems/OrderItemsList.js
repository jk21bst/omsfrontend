import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function OrderItemsList() {

    const navigate = useNavigate();
    const [orderItem, setOrderItem] = useState([]);
    const [orderItemId, setOrderItemId] = useState("");
    const [quantity, setQuantity] = useState("");
    const [unitPrice, setUnitPrice] = useState("");
    const [totalPrice, setTotalPrice] = useState("");
    const [orderStatus, setOrderStatus] = useState("")
    const [item, setItem] = useState([]);
    const [productCategory, setProductCategory] = useState("");
    const [productQuantity, setProductQuantity] = useState("");
    const [productCost, setProductCost] = useState("");
    const [productUrl, setProductUrl] = useState("");
    const { custId,orderId } = useParams();
    useEffect(() => {
        Axios.get(`http://localhost:61132/api/OrderItems/orderId/${orderId}`)
            .then(response => {
                console.log(response.data)
                setOrderItem(response.data)
            })
    }, [])


    function Home() {
        alert('You orders were placed!');
      }
      window.location.href = `/orderList/${custId}`
     
     
    

    const orderItems = orderItem.map((orditem, index) => {
        return (
            <tr key={orditem.orderProductId} >
                <td>{orditem.orderProductId}</td>
                <td>{orditem.orderStatus}</td>
                <td>{orditem.quantity}</td>
                <td>{orditem.unitPrice}</td>
                <td>{orditem.totalPrice}</td>
                <td>{orditem.discount}</td>
                
                
            </ tr >
            
            )
    })
    return (
        <>
            <table className="table table-striped" >
                <thead>
                    <tr>
                        <td>OrderItemId</td>
                        <td>OrderStatus</td>
                        <td>Quantity</td>
                        <td>UnitPrice</td>
                        <td>TotalPrice</td>
                        <td>Discount</td>
                       

                    </tr>
                </thead>
                <tbody>{orderItems}</tbody>
                
                
               

                
            </table>

            <button btn btn-primary onClick={Home}>Back To Home</button>
          


        </>
        
        
        
        )
}

export default OrderItemsList;