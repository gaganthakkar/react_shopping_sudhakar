import {useState, useEffect} from "react";
import axios from 'axios';


export default function AxiosComponent()
{
    const[products, setProducts] = useState([]);
    const[categories, setCategories] = useState([]);
    const[filteredProducts, setFilteredProducts] = useState([]);

    useEffect(()=>{
      axios.get('http://fakestoreapi.com/products')
      .then(response=>{
           setProducts(response.data);       // because response contains lots of problems
           setFilteredProducts(response.data); 
      })  

      axios.get('http://fakestoreapi.com/products/categories')
      .then(response=>{
          let data = response.data;
          data.unshift('ALL');
          setCategories(data);
      });

   
    },[]);

    function handleCategoryChange(e)
    {
        if(e.target.value === 'ALL') 
        {
          setFilteredProducts(products);       // products is the state which collects all the products and displaying all the products
        }

        else
        {
            setFilteredProducts(products.filter(product=>product.category===e.target.value));
        }

    }

    return(
        <div className="container-fluid">
            <div className="row">

                <div className="col-3">
                    <h3>Select a Category</h3>
                    <select className="form-select" onChange={handleCategoryChange}>
                        {
                            categories.map(category=>
                            <option key={category} value={category}>
                                {category.toUpperCase()}
                            </option>
                            )
                        } 
                    </select>
                </div>

                <div className="col-9">
                    <h3>Product List</h3>

                    <div className='d-flex flex-row flex-wrap'>
                        {
                            filteredProducts.map(product=>
                                <div className="card m-2" key = {product.id} style={{width:'200px'}}>
                                <img className="card-img-top" src={product.image} alt={product.title} height="200"/>
                                
                                <div className="card-header" style = {{height:'150px'}}>
                                    <p>{product.title}</p>
                                </div>

                                <div className="card footer">
                                  <p>{product.price}</p>
                                  <button className="btn btn-primary w-100">
                                  <span className="bi bi-cart2"></span>
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