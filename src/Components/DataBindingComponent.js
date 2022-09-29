import React from 'react';
export default function DataBindingComponent()
{
    var product = {
        Name: "JBL Speaker",
        Price: 4500,
        Stock: true,
        Photo: "logo192.png"
    };
    return(
        <div className="container-fluid">
            <h3>Product Details</h3>

            <dl>
            <dt>Edit Name</dt>
            <dd><input type="text" value={product.Name}/></dd>              
            {/* The JBL speaker here on the product.Name, we won't be able to edit that. */}

            <dt>Name</dt>
            <dd>{product.Name}</dd>

            <dt>Price</dt>
            <dd>{product.Price}</dd>

            <dt>Stock</dt>
            <dd>{(product.Stock==true)? "Available" : "Out of stock"}</dd>

            <dt>Preview</dt>
            <dd>
              <img src={product.Photo} alt="speaker" className="h-5 w-5" />
            </dd>
            </dl>
        </div>
    )
}




 