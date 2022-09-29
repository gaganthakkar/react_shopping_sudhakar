import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

export default function Details() {

    const{id} = useParams(); 
    const[product, setProduct] = useState({});

    useEffect(()=> {
        axios.get(`http://fakestoreapi.com/products/${id}`)
        .then(response=>{
            setProduct(response.data);
        })
    }, []);
  return (
      <div>
          <Link to={`/products/${product.category}`}>Back to products</Link>
      <div className="card w-50">
        <img src={product.image} alt={product.title} className="card-img-top" height="200" />
        <div className="card-header">
            <h3>{product.title}</h3>
            <p>{product.price}</p>
        </div>
        <div className="card-body">
            <p>{product.description}</p> 
        </div>
        <div className="card-footer">
            <button className="btn btn-danger">
                <span className="bi bi-cart3">
                Add to Cart
                </span>
            </button>
        </div>
    </div>
    </div>
  )
}
