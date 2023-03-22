import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavbarPrimary from '../Navbar/NavbarPrimary';
// import '../styles.css';

function AddCart() {

    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [cartId, setCartId] = useState("");
    const [cartQuantity, setCartQuantity] = useState("");
    const [cartAmount, setCartAmount] = useState("");
    const [customer, setCustomer] = useState([]);
    const [product, setProduct] = useState("");
    const { custId, productId } = useParams();

    useEffect(() => {
        Axios.get(`http://localhost:61132/api/Customers/${custId}`)
            .then(response => {
                console.log(response.data)
                setCustomer(response.data)
            })
        Axios.get(`http://localhost:61132/api/Products/${productId}`)
            .then(response => {
                console.log(response.data)
                setProduct(response.data)
            })
    }, [])

    function AddToCart() {
        const cartData = { cartAmount: cartQuantity * product.productCost, cartQuantity, productId, custId }
        // try {
        //     await fetch("http://localhost:61132/api/Carts",{
        //         method:"POST",
        //         headers:{ "Content-Type":"applicatio/json",


        //         },
        //         body:JSON.stringify(cartData)
        //     })
        // } catch (error) {
        //    console.log(error) ;
        // }
        // console.log(cartData)
        
        Axios.post(`http://localhost:61132/api/Carts`, cartData)
            .then(response => {
                console.log(response.data)
                alert("Added to cart")
                window.location.href = `/cartList/${custId}`


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
                                    <th scope="col">No.</th>
                                    <th scope="col">Product Image</th>
                                    <th scope="col">Product </th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Cost</th>
                                    <th scope="col">Controls </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td class="w-25">
                                        <img src={product.productUrl} class="img-fluid img-thumbnail" alt="Image" />
                                    </td>
                                    <td>{product.productCategory}</td>
                                    <td>
                                        <div class="app-form-group">
                                            {/* <span>Quantity:</span> */}
                                            <input class="app-form-control" placeholder="Quantity" value={cartQuantity} onChange={e => { setCartQuantity(e.target.value) }} />
                                        </div>
                                    </td>

                                    <td><div class="app-form-group ">
                                        <input class="app-form-control" placeholder="Cost" value={cartQuantity * product.productCost} onChange={e => { setCartAmount(e.target.value) }} />
                                    </div></td>
                                    <td><div class="app-form-group buttons">

                                        <button class="app-form-button" type="submit" onClick={AddToCart}>Add To Cart</button>
                                    </div></td>
                                    <td>
                                        <div class="app-form-group buttons">

                                            {/* <button class="app-form-button" type="submit" onClick={AddToCart}>Add To Cart</button> */}
                                            <button class="app-form-button" > Remove</button>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
</>
    )

}
export default AddCart;