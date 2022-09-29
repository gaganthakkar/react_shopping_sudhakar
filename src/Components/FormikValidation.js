import React from 'react';
import {useFormik} from 'formik';

const ValidateProduct = (productData)=>{                    //  WE WILL TAKE THE VALUES FROM THE LINE 49 AND PUT IT IN THE FUNCTION VALIDATEPRODUCT pass it to the productData
    const errors={};
if(productData.Name == undefined)
{
    errors.Name = "Product Name Required"
}
else if(productData.Name.length<4)
{
    errors.Name = 'Name too short... min 4 chars required';
}

if(!productData.Price)
{
    errors.Price = 'Price Required';
}

else if(isNaN(productData.Price))
{
    errors.Price = 'Price must be  number'
}

if(!productData.Code)
{
    errors.Code = 'Product Code Required';
}

else if(!/[A-Z]{3} [0-9]{2}/.test(productData.Code))     // It will compare with the test method with product.Code, and if it is not matching, then only it will give that error

{
    errors.Code = 'Invalid Product Code';              
}

    return errors;
}

export default function FormikValidation() {

    const formik= useFormik ({
        initialValues:{
            Name: '',
            Price: 0,
            Code: ''
        }, 

        validate: ValidateProduct,      //validate is the property in the formik, that refers to the function 
        onSubmit: values=>{
            alert(JSON.stringify(values));
        }
    })

    
  return (
     
    <div className="container-fluid">
         <form className="w-25" onSubmit={formik.handleSubmit}>
      <h2>Register Product</h2>
      <dl>
          <dt>Name</dt>
          <dd><input type="text" name="Name" value={formik.values.Name} onChange={formik.handleChange} className="form-control"/></dd>
          <dd className= "text-danger">
            {(formik.errors.Name)? formik.errors.Name:null}
          </dd>

          <dt>Price</dt>
          <dd><input type="text" name="Price" value={formik.values.Price} onChange={formik.handleChange} className="form-control"/></dd>
          <dd className= "text-danger">
            {(formik.errors.Price)? formik.errors.Price:null}
          </dd>

          <dt>Code</dt>
          <dd><input type="text" name="Code" value={formik.values.Code} onChange={formik.handleChange} className="form-control"/></dd>

          <dd className= "text-danger">
            {(formik.errors.Code)? formik.errors.Code:null}
          </dd>

          {/* <dt>Name</dt>
          <dd><input type="text"/></dd> */}
      </dl>

      <button className="btn btn-primary w-10">Register</button>
      </form>
    </div>
    
  )
}
