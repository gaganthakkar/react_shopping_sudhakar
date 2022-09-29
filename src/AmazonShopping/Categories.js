import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Categories() 
{

    const[categories,setCategories] = useState([]);

    useEffect(()=>{
        axios.get('http://fakestoreapi.com/products/categories')
        .then(response=>{
            let data= response.data;
            data.unshift("All");
            setCategories(data);
        });
    });
    
  return (
    <div>     
      <h3>Categories List</h3>
      <ol>
          {
              categories.map(category=>
              <li>
                <Link to = {`/products/${category}`}>{category}</Link>
              </li>
              )
          }
      </ol>
    </div>
  )
}
