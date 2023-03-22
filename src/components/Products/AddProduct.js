import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdminNav from '../Navbar/AdminNav';


function AddItem() {

    const [product, setProduct] = useState([]);
    const [productId, setProductId] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productQuantity, setProductQuantity] = useState("");
    const [productCost, setProductCost] = useState("");
  
    const [productUrl, setProductUrl] = useState("");
    const { custId } = useParams();

    useEffect(() => {
        Axios.get(`http://localhost:61132/api/Products`)
            .then(response => {
                console.log(response.data)
                setProduct(response.data)
            })
    }, [])

    function AddItems() {
        const product = { productCategory, productQuantity, productCost, productUrl }
        console.log(product)
        Axios.post(`http://localhost:61132/api/Products/add`, product)
            .then(response => {
                console.log(response.data)
                alert("Product Added")
            })
    }
    return (
        <>
        <AdminNav/>
            <div class="background">
                <div class="container">
                <section className="vh-100">
      <div className="container-fluid h-custom ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-7">
                    
                        <div class="screen-body">
                            <div class="screen-body-item left">
                                <div class="app-title">
                                  <p>ADD NEW PRODUCT</p>
                                </div>



                            </div>
                            <div class="screen-body-item">
                                <div class="app-form">
                                <div class="app-form-group">
                                        <input class="app-form-control" placeholder="Produt Title" value={productCategory} onChange={e => { setProductCategory(e.target.value) }} />
                                    </div>
                                           
                                    <div class="app-form-group">
                                        <input class="app-form-control" placeholder="Quantity" value={productQuantity} onChange={e => { setProductQuantity(e.target.value) }} />
                                    </div>
                                    <div class="app-form-group ">
                                        <input class="app-form-control" placeholder="Cost" value={productCost} onChange={e => { setProductCost(e.target.value) }} />
                                    </div>
                                  
                                    <div class="app-form-group">
                                        <input class="app-form-control" placeholder="Image Link" value={productUrl} onChange={e => { setProductUrl(e.target.value) }} />
                                    </div>
                                    
                                    <div class="app-form-group buttons">

                                        <button class="app-form-button" type="submit" onClick={AddItems}>Add</button>
                                        <button class="app-form-button" > Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
                </div>
                </section>
                </div>
                </div>
            

        </>
        )
}
export default AddItem;