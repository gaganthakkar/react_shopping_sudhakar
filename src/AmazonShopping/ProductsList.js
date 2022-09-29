import React from 'react'
import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

export default function ProductsList() {

     const[products, setProducts] =useState([]);

     const{category} = useParams();              // useParams is an object it contains only key and value meaning key is category- and value is for e.g. electronics 


    useEffect(()=> {
          
        fetch(`https://fakestoreapi.com/products/category/${category}`)   // https://fakestoreapi.com/products/category/electronic, this will return only electronic products
        // and this ${category} is the useParams that is passed in the URL
        .then(response=>response.json())
        .then(data => {
            //  data.unshift("All");           // this will not going to work, we cannot affect API, we can do locally in axios method
            setProducts(data)
        });

        },[]);

  return (
<div>
    <ol>
        {
            products.map(product=>
                <li><Link to={`/details/${product.id}`}>{product.title} </Link></li>    
            )
        }
    </ol>

    <p>
        <Link to="/categories">Back to category</Link>
    </p>
</div>
  )
}
