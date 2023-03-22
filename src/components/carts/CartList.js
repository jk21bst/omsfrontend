import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import NavbarPrimary from '../Navbar/NavbarPrimary';


function CartList() {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [cartId, setCartId] = useState("");
    const [cartQuantity, setCartQuantity] = useState("");
    const [cartAmount, setCartAmount] = useState("");
    const [customer, setCustomer] = useState([]);
    const [count, setCount] = useState("");
    const [totalPrice, setTotalPrice] = useState("");
    const [item, setItem] = useState("");
    const { custId } = useParams();

    useEffect(() => {
        Axios.get(`http://localhost:61132/api/Customers/${custId}`)
            .then(response => {
                console.log(response.data)
                setCustomer(response.data)
            })
        
        Axios.get(`http://localhost:61132/api/Carts`)
            .then(response => {
                console.log(response.data)
                setCart(response.data)
                setCount(cart.length)
                setTotalPrice(TotalCartCost)
                console.log(count, totalPrice)
                

            })
    }, [])

    function DeleteItem(cartId) {
        Axios.delete(`http://localhost:61132/api/Carts/${cartId}`)
            .then(response => {
                console.log(response.data)
                alert("Deleted the item from the cart" )
                window.location.href=`/cartList/${custId}`;
            })

    }
    function TotalCartCost() {
        let price = 0;
        cart.forEach(item => {
            price = price + item.cartAmount;
        })
        return price;
    }

    function Proceed(ProductId) {
        
        cart.forEach(val => {
            
            
            Axios.get(`http://localhost:61132/api/Products/${val.productId}`)
                .then(response => {
                    console.log(response.data)
                    setItem(response.data)
                    let tmp ={
 
                        "productId": 1,
                        "productCategory": "Electronics",
                        "unitPrice": 5000,
                        "totalPrice": 5000,
                        "custId": 1,
                        
                      };

                    let tempData = {productId: val.productId, productCategory: response.data.productCategory, unitPrice: response.data.productCost, totalPrice: val.cartAmount,  custId:custId}
                    console.log(tempData)
                    
                    Axios.post(`http://localhost:61132/api/TempItems/add`, tempData)
                        .then(response => {
                            console.log("temp items")
                          
                        })
                       
                     
                })
        })
        cart.forEach(val => {
            Axios.delete(`http://localhost:61132/api/Carts/${val.cartId}`)
                .then(response => {
                    console.log("cART EMPTY");
                    window.location.href=`/tempItemList/${custId}`;
                })
        })

    }
    
    


    const carts = cart.map((ct, index) => {

        return (
            
            <tr key={ct.cartId}>
                <td>{ct.cartId}</td>
                <td>{ct.cartAmount}</td>
                <td>{ct.cartQuantity}</td>
                <td>{ct.custId}</td>
                <td>{ct.productId}</td>
                
                <td><button className="btn btn-primary-warning" onClick={DeleteItem.bind(this, ct.cartId)}>Remove</button></td>
            </tr>
            )
    })
    return (
        <>
          <NavbarPrimary/>
            <table className="table table-striped" style={{ marginTop: "5px" }}>
                <thead style={{ backgroundColor: "blueviolet" }}>
                    <tr>
                        <th>CartId</th>
                        <th>CartAmount</th>
                        <th>CartQuantity</th>
                        <th>CustomerId</th>
                        
                        <th>Product</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{carts}</tbody>
            </table>
            <button className="btn btn-outline-dark" style={{ marginLeft: "1000px", marginRight: "5px" }} onClick={() => navigate(`/productList/${custId}`)}>AddMore</button>
            <button className="btn btn-outline-dark" onClick={Proceed}>Proceed</button>

        </>
        )
}

export default CartList;