import Axios from 'axios';
import Moment from 'moment';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdminNav from '../Navbar/AdminNav';


function AllOrderAdmin() {


    const navigate = useNavigate();
    const [order, setOrder] = useState([]);
    const [orderId, setOrderId] = useState("");
    const [orderStatus, setOrderStatus] = useState("");
    const [orderQuantity, setOrderQuantity] = useState("");
    const [orderCost, setOrderCost] = useState("");
    const [orderDate, setOrderDate] = useState("");
    const[orderTotal,setOrderTotal] = useState("");
    //const [custId, setCustId] = useState("");
    const [customer, setCustomer] = useState([]);
    //const [custId, setCustId] = useState("");
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
        Axios.get(`http://localhost:61132/api/Orders/${orderId}`)
            .then(response => {
                console.log(response.data)
                setOrder(response.data)
            })

       
    },[])

    function DeleteItem(orderId) {
        Axios.delete(`http://localhost:61132/api/Orders/delete/${orderId}`)
            .then(response => {
                console.log(response.data)
                alert("Deleted the item from the cart" )
                window.location.href=`/AllOrderAdmin`;
            })

    }


    function UpdateOrder(orderId) {
        const order = { 
            orderId:orderId,orderStatus:orderStatus,orderQuantity:orderQuantity,orderCost:orderCost,orderDate:orderDate,orderTotal:orderTotal}
        console.log(order)
        Axios.put(`http://localhost:61132/api/Orders/update/${orderId}`, order)
            .then(response => {
               
                console.log(response.data)
                alert("Successfully updated status")
            })
    }

    


    const orders = order.map((ord, index) => {
        return (
            <tr key={ord.orderId}>
                <td>{ord.orderId}</td>
                <td>{ord.orderStatus}</td>
                <td>{ord.orderQuantity}</td>
                <td>{ord.orderCost}</td>
                <td>{Moment(ord.orderDate).format("DD-MM-YYYY")}</td>
                <td>{ord.orderTotal}</td>
               
                
                <div class="screen-body-item">
                                <div class="app-form">
                                    <div class="app-form-group">
                                        <select class="app-form-control" name="orderStatus" onChange={e => { setOrderStatus(e.target.value) }}>
                                            <option value="Select a Category">Select status</option>
                                            <option value="Cancelled">cancelled</option>
                                            <option value="In Transit">on transit</option>
                                            <option value="Delivered">delivered</option>
                                            <option value="Onhold">onhold</option>
                                        </select>
                                        </div>
                                        </div>

                                    </div>
                                    
                                    


                <td>
                    <button className="btn btn-danger" onClick={DeleteItem.bind(this, ord.orderId)}>Reject</button>
                <button className="btn btn-success" onClick={UpdateOrder.bind(this,ord.orderId)}>Update</button>
            </td>
            </tr>
            )
    })

    return (
        <>
            <AdminNav/>

            <table className="table">
                <thead className='thead-dark'>
                    <tr>
                        <th>OrderId</th>
                        <th>OrderStatus</th>
                        <th>Quantity</th>
                        <th>Cost</th>
                        <th>Date</th>
                        <th>OrderTotal</th>
                        
                        <th>Mark Status</th>
                    </tr>
                </thead>
                <tbody>{orders}</tbody>

            </table>
        </>
        )
}
      

        export default AllOrderAdmin;
  



































