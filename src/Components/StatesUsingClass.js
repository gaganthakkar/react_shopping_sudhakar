import React from 'react';

export default class StatesUsingClass extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {                // state is a built in property and it is an object, and inside you can have any type of data type or property 
            Name: '',
            Price: 0, 
            Stock: false
        }    
        
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleStockChange = this.handleStockChange.bind(this);
        
        
        // this.handleInsertClick = this.handleInsertClick.bind(this);         // we bind the method and now state can access it. Another way to bind it is to give callback function, check line 66 and 67
    }

    handleInsertClick() 
    {
        alert("Insert Clicked");                // here on click event is happening, but it is still executing without using the state

        // this.setState({ Name: 'Samsung TV'})    // this will not going to work, because we need to bind the event into the state, inorder to access it, that is done on line 15
    }

    handleNameChange(e){
        this.setState({
            Name: e.target.value,
            Price: this.state.Price,
            Stock: this.state.Stock
        })
    }

    handlePriceChange(e)
    {
        this.setState({
            Name: this.state.Name,
            Price: e.target.value,
            Stock: this.state.Stock
        })
       
    }

    handleStockChange(e)
    {
        this.setState({
            Name: this.state.Name,
            Price: this.state.Price,
            Stock: e.target.checked
        })
    }
    render() 
    {
        return(
            <div className="container-fluid">
                <h1 className ="text-center">State in Class Component</h1>
            <div className="row">
                <div className="col-3">
                <h2>Register Product</h2>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" value={this.state.Name} onChange = {this.handleNameChange} className='form-control'/></dd>
                </dl>

                <dl>
                    <dt>Price</dt>
                    <dd><input type="text" value={this.state.Price} onChange = {this.handlePriceChange} className='form-control' /></dd> 
                </dl>

                <dl>
                    <dt>Stock</dt>
                    <dd className="form-check form-switch">
                        <input className="form-check-input" onChange = {this.handleStockChange} type="checkbox" checked={this.state.Stock}/>
                    </dd> 
                </dl>

                </div>

                <div className="col-9">
 
                <dl>        
                <dt>Name</dt>
                <dd>{this.state.Name}</dd>

                <dt>Price</dt>
                <dd>{this.state.Price}</dd>

                <dt>Stock</dt>
                <dd>
                    {(this.state.Stock==true) ? "Available" : "Out of stock"}
                </dd>
                </dl>

                <button onClick = {()=>this.handleInsertClick()}>Insert</button>
                {/* ()=> this.handleInsertClick() is a callback, alternate way using the bind method */}

                </div>
            </div>
        </div>
        )
    }
}