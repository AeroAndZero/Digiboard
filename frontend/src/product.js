import React, { useEffect, useState } from "react";
import {useSearchParams} from "react-router-dom";
import axios from 'axios';
import './product.css';

function Product(props){

    const [searchParams, ] = useSearchParams();
    const productID = searchParams.get("id")
    console.log(productID);

    const [product,setProduct] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:3001/Product/${productID}`).then(res => {
            setProduct(res.data[0]);
            console.log(res.data[0]);
        })
    },[]);

    return(
    <div className="productContainer">
        <div className="prImage">
            <div>
                <img src={"/img/boards/" + product.imguri} alt="product" />
            </div>
            <div className="prMap">
            </div>
        </div>
        <div className="prInfo">
            <div className="prArea">
                {product.area}
            </div>
            <div className="prPincode">
                {product.pincode}
            </div>
            <div className="prCity">
                {product.city}
                <hr className="prHr" />
            </div>
            
            <div className="prAgency">
                By {product.agency}
            </div>

            <div className="prPrice">
                Price : ₹ {product.price}
                <hr className="prHr" />
            </div>

            <div className="prContact">
                Contact : +91-{product.contact}    
            </div>
            <div className="prContactBtn">
                <input type="button" className="contactBtn" value="Contact Agency"/>
            </div>
        </div>
    </div>
    )

}

export default Product;