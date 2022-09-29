    import React from 'react';

    import {useState} from 'react'

    export default function DataBindingUsingStates()
    {
        const [product, setProduct] = useState({Name: '', Price: 0, Stock: false});    // the value inside the useState will be initiall stored into the product

       

        function handlePriceChange(e)            // e is the even argument, meaning it can access the value entered inside the handleNameChange
        {
        
            setProduct({
                Name: product.Name,
                Price: e.target.value,
                Stock: product.Stock
            })
        }

        function handleStockChange(e)            // e is the even argument, meaning it can access the value entered inside the handleNameChange
        {


            setProduct({
                Name: product.Name,
                Price: product.Price,
                Stock: e.target.checked,            // checked property will see whether it is true or false
            })
        }

        return (
            // <div className="container-fluid">
            //     <h2>Product Details</h2>

            //     <dl>
            //         <dt>Edit Name</dt>
            //         <dd><input type="text" onChange={handleNameChange} value={product.Name}/></dd>
            //         {/* We won't be able to change the value from product.Name, we need events to change the value and use setProduct over there */}

            //         <dt>Name</dt>
            //         <dd>{product.Name}</dd>

            //         <dt>Price</dt>
            //         <dd>{product.Price}</dd>

            //         <dt>Stock</dt>
            //         <dd>{(product.Stock == true)? "Available" : "Out of stock"}</dd>
            //     </dl>
            // </div>


            <div className="container-fluid">
                <div className="row">
                    <div className="col-3"  style={{"margin-right":"100px"}}>
                    <h2>Register Product</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd><input type="text" value={product.Name} onChange =
                        {(e)=>  setProduct({
                                 Name: e.target.value,
                                 Price: product.Price,
                                 Stock: product.Stock
                         })}
                        className="form-control"/></dd>
                    </dl>

                    <dl>
                        <dt>Price</dt>
                        <dd ><input type="text" value={product.Price} onChange = {handlePriceChange} className="form-control"/></dd> 
                    </dl>

                    <dl>
                        <dt>Stock</dt>
                        <dd className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" checked={product.Stock} onChange = {handleStockChange}/>
                        </dd> 
                    </dl>

                    </div>

                    <div className="col-7" style={{"margin-top":"50px"}} >
    
                    <dl>        
                    <dt>Name</dt>
                    <dd>{product.Name}</dd>
                    <br/>
                    <dt>Price</dt>
                    <dd>{product.Price}</dd>
                    <br/>
                    <dt>Stock</dt>
                    <dd>
                        {(product.Stock==true) ? "Available" : "Out of stock"}
                    </dd>
                    </dl>

                    </div>
                </div>
            </div>
        )
    }


