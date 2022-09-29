import React from 'react';

import {useState} from "react";

export default function ProductComponent1()

{
    const[products, setProducts] = useState([{Id: 1, Name: 'JBL Speaker', Price: 4500, Photo: 'logo192.png'}, {Id: 2, Name: 'Nike Casuals', Price: 4500, Photo: 'logo512.png'} ]); 

    return(
        <div className="container-fluid">
            <h2>Products Table</h2>

            <table className="table table-hover w-50">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Preview</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        products.map(product=>
                            <tr key={product.Id}>
                                <td>{product.Name}</td>
                                <td>{product.Price}</td>
                                <td><img alt={product.Name} src={product.Photo} width="100px" height="100px"/></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
                
                <h2>Product Catalog</h2>
                <div className="d-flex flex-wrap flex-row">
                    {
                       products.map(product=>
                        <div className= "card m-3 p-2" key={product.Id}>
                            <img alt={product.Name} src={product.Photo} height="200" className="card-img-top"/>

                            <div className="card-header">

                            <h3>{product.Name}</h3>
                            <p>{product.Price}</p>
                            </div> 
                        </div>
                        ) 
                    }
                </div>
 
        </div>
    )
}

