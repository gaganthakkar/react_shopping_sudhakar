import React from 'react';

export default class DataBindingComponentUsingClass extends React.Component {



   product = {
        Name: "JBL Speaker",
        Price: 4500,
        Stock: true,
        Photo: "logo192.png"
    };
 
render()
{
    return(
        <div className="container-fluid">
            <h3>Product Details</h3>
            <dl>

            <dt>Edit Name</dt>
            <dd><input type="text" value={this.product.Name}/></dd>


            <dt>Name</dt>
            <dd>{this.product.Name}</dd>

            <dt>Price</dt>
            <dd>{this.product.Price}</dd>

            <dt>Stock</dt>
            <dd>{(this.product.Stock==true)? "Available" : "Out of stock"}</dd>

            <dt>Preview</dt>
            <dd>
                <img src={this.product.Photo} alt="speaker" height='100' width='100'/>
            </dd>

            </dl>
        </div>
    )
}

}


