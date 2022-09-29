    import React, {useState, useEffect } from 'react';


    export default function FetchDemoComponent()
    {
        const [categories, setCategories] = useState([]);
        const [products, setProducts] = useState([]);

        useEffect(()=> {
        
        fetch('http://fakestoreapi.com/products/categories')
        .then(response => response.json())
        .then(data => {

            let allCategories = data;                           // we are going to add the ALL in the categories
            allCategories.unshift("All");
            setCategories(allCategories);
            
        });
        
        fetch("https://fakestoreapi.com/products")
        .then(response=>response.json())
        .then(data => {
            //  data.unshift("All");           // this will not going to work, we cannot affect API, we can do locally in axios method
            setProducts(data)
        });

        },[]);


        function handleCategoryChange(e)
        {
            if(e.target.value=="All")
            {
                fetch("https://fakestoreapi.com/products")
                .then(response=>response.json())
                .then(data => {
                    //  data.unshift("All");           // this will not going to work, we cannot affect API, we can do locally in axios method
                setProducts(data)
                });
            
            
            }

            else
            {
                fetch(`https://fakestoreapi.com/products/category/${e.target.value}`)
                .then(response=> response.json())
                .then(data=> 
                {
                
                setProducts(data)
            
                
                });

            }
            
        }
        
    return(

    
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2">
                <h2><span className="bi bi cart2"></span>Shopping Online</h2>
            </header>

            <div className="row">
                    <div className="col-3">

                    <h3>Select a category</h3>
                    <select className= "form-select" onChange = {handleCategoryChange}>
                        {
                            categories.map(category => 
                                <option value={category} key={category}>{category.toUpperCase()}</option>
                                
                                )
                        }

                    </select>
                    </div>

                    <div className="col-9">
                        
                        <h2 className="text-center align-center mt-2">Products List</h2>
                            <div className= "d-flex flex-wrap flex-row" style={{height:'auto', overflow:'auto'}}>
                                {
                                    products.map(product=>
                                        <div className="card m-2" key = {product.id} style={{width:'200px'}}>
                                            <img className="card-img-top" src={product.image} alt={product.title} height="200"/>
                                            
                                            <div className="card-header" style = {{height:'150px'}}>
                                                <p>{product.title}</p>
                                            </div>

                                            <div className="card footer">
                                                <p>{"$"}{product.price}</p>
                                                <button className="btn btn-primary w-100">
                                                <span className="bi bi-Cart2"></span>
                                                Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                    </div>

                
                
            </div>
        </div>
    ) 
    }

