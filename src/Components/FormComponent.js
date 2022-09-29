import React, {useState} from 'react';

export default function FormComponent()
{

    const[getName, setName] = useState('');
    const[getPrice, setPrice] = useState(0);
    const[getStock, setStock] = useState(false);
    const[getCity, setCity] = useState('');

    function handleSubmit()
    {
        document.write(`Name=${getName} <br>Price=${getPrice}<br> Stock=${getStock} <br> Shipped To=${getCity}`);
    }
    return(
        <div className="container-fluid">
            <h3> Register Product</h3>
            <form onSubmit={handleSubmit}>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" name ="Name" onChange= {e=>setName(e.target.value)} value= {getName}/></dd>      {/* {e=>setName(e.target.value) meaning whatever value you entered, it will come into and it will be stored */}   
                   

                    <dt>Price</dt>
                    <dd><input type="text" name="Price" onChange= {e=>setPrice(e.target.value)} value ={getPrice}/></dd>

                    <dt>Shipped to</dt>
                    <dd>
                        <select name= "City" onChange= {e=>setCity(e.target.value)} value={getCity}>
                            <option>Delhi</option>
                            <option>Hyd</option>
                        </select>
                    </dd>

                    <dt>Stock</dt>
                    <dd><input type="checkbox" name= "Stock" onChange= {e=>setStock(e.target.checked)} checked={getStock}/>YES</dd>  
                </dl>

                <button>Register</button>
            </form>
        </div>
    )
}


// THIS IS NOT THE GOOD APPROACH TO USE THE EVENTS ALL THE TIME AND SUBMIT THE FORM, INSTEAD TO USE THE JAVASCRIPT METHOD TO STORE THE DATA 

/* 

Name=fdsfadsg
Price=434242
Stock=true
Shipped To=

Above is the data we get and we sent it to the database usually

*/