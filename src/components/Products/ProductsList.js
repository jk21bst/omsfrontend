import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import NavbarPrimary from '../Navbar/NavbarPrimary';





function ProductsList() {
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const [productId, setproductId] = useState("");
    const [productCategory, setproductCategory] = useState("");
    const [productQuantity, setproductQuantity] = useState("");
    const [productCost, setproductCost] = useState("");
    const [productDiscount, setproductDiscount] = useState("")
    const [productUrl, setproductUrl] = useState("");
    const [searchTerm, setsearchTerm] = useState("");
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [order, setOrder] = useState("ASC");
    const { custId } = useParams();
    useEffect(() => {
        Axios.get(`http://localhost:61132/api/Products`)
            .then(response => {
                console.log(response.data)
                setProduct(response.data)
            })
    }, [])


    return (
        <>
        <NavbarPrimary/>
        
            <input
                type="text" placeholder="Search Product.." className="form-control my-1 mx-8"
                style={{ width: "40%" }}
                onChange={(e) => {
                    setsearchTerm(e.target.value);
                }} />


            


                <div className="row" >
                    {product.filter((val) => {
                if (searchTerm === "") {
                    return val;
                } else if (
                    val.productCategory.toLowerCase().includes(searchTerm.toLowerCase())


                ) {
                    return val;
                }
            }).map((items, index) => {
                        return (
                            <div className="col-md-3  " key={index}>
                                <div className="card rounded-lg my-4" style={{ width: "15.5rem" ,height:"25rem" }}>
                                    <img className="card-img-top" src={items.productUrl} alt="Card image cap" />
                                    <div class="card-body">
                                       
                                        <h5 className="card-title">{items.productCategory}</h5>
                                        <p className="card-text" style={{ color: "blue" }}>AvailableQuantity:{items.productQuantity}</p>
                                        <button onClick={() => navigate(`/newtempItem/${custId}/${items.productId}`)} className="btn btn-dark" style={{ marginRight: "3px" }}>BuyNow</button>
                                        <button onClick={() => navigate(`/addToCart/${custId}/${items.productId}`)} className="btn btn-dark">Add TO Cart</button>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                    )
                    }



                </div>


                
            

    
        </>
    )



}

export default ProductsList;