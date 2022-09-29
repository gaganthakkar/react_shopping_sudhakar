// import react from 'react';
import { useState } from 'react';

export default function NestedProductComponent()
{
    const[data, setData] = useState([{Category:'Electronics', Products:['Tv', 'Mobile']}, {Category:'Footwear', Products:['Nike Casuals', 'Lee Boot']}]);

    const[product, setProduct] = useState('');


function handleProductChange(e){                // event e will take the value from the select where it is called and it will set the value of it
    setProduct(
        e.target.value                 // e.target.value would be the value you selected
    );
}   

    return(
        <div className="container-fluid">

             <h2>Select a Product</h2>

             <ol>
                 {
                     data.map(item=>
                            <li key={item.Category}>
                                {item.Category}
                                <ul>
                                    {
                                    item.Products.map(product=>
                                        <li key={product}>{product}</li>
                                        )
                                    }
                                </ul> 
                            </li>
                        )
                 }
             </ol>

             <h2>Select Product</h2>

             <select className="form-select w-25" onChange={handleProductChange}>
                 {
                     data.map(item=>
                        <optgroup key={item.Category} label={item.Category}>
                            {
                                item.Products.map(product=>
                                        <option key={product}>
                                            {product}
                                        </option>
                                    )
                            }
                        </optgroup>
                        )
                 }
             </select>
             <div className="mt-3">
                 Selected Product: <h4><span className="text-primary">{product}</span></h4>
             </div>
        </div>
    )
}