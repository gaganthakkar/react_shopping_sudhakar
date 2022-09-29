import React,  {useState} from 'react';
import {useFormik} from 'formik';

export default function FormikDemoComponent()
{
const formik = useFormik({
    initialValues : {                               // initialValues inidicated what are the values you wqnt to store form the form
        Name: '',
        Price: 0,
        ShippedTo: '',
        Stock: false

    },
    
    onSubmit: values=> {
        document.write(`Name=${values.Name}<br> Price=${values.Price}<br>City=${values.ShippedTo}<br> Stock=${values.Stock}`);
    }
})
  
    return(
        <div className="container-fluid">
            <h3> Register Product</h3>
            <form onSubmit={formik.handleSubmit} >
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" name="Name" onChange={formik.handleChange} value ={formik.values.Name} /></dd>      {/* Formik.values can access the initial values */}   
                   {/* formik.handleChange this method is response for collecting updated value and storing the property named value */}

                    <dt>Price</dt>
                    <dd><input type="text" name="Price" onChange={formik.handleChange} value ={formik.values.Price} /></dd>

                    <dt>Shipped to</dt>
                    <dd>
                        <select name="ShippedTo" onChange={formik.handleChange} value ={formik.values.ShippedTo}>
                            <option>Select City</option>
                            <option>Delhi</option>
                            <option>Hyd</option>
                        </select>
                    </dd>

                    <dt>Stock</dt>
                    <dd><input type="checkbox" name="Stock" onChange={formik.handleChange} checked ={formik.values.Stock}/>YES</dd>
                </dl>

                <button>Register</button>
            </form>
        </div>
    )

    
}