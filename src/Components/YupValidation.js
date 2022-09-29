import React from 'react'
import {useFormik} from 'formik';
import * as yup from 'yup';

export default function YupValidation() {

    const formik = useFormik({
        initialValues: {
            Name: '',
            Age: 0,
            Email: ''
        },
    

validationSchema: yup.object({
    Name:yup.string()
                .min(4, 'Name too short - Min 4 chars Required')
                .max(10, 'Name too long - Max 10 chars only')
                .required('User Name Require'),

    Age: yup.number()
    .required('Age Required'),

    Email: yup.string()
                .email('Invalid Email')
                .required('Email Required')
}),

onSubmit: values => {
    alert(JSON.stringify(values));
}

})
return(
    <div className="container-fluid">
        <h3> Register Product</h3>
        <form onSubmit={formik.handleSubmit} >
            <dl>
                <dt>Name</dt>
                <dd><input type="text" name="Name" {...formik.getFieldProps("Name")} /></dd>            
                {/* ... is rest parameter, it will allow multiple arguments & getFieldProps is the method to access all the values of the input and in argument it takes name */}
                <dd className="text-danger">
                    {formik.touched.Name && (formik.errors.Name)? formik.errors.Name: null}
                </dd>
                <dt>Age</dt>
                <dd><input type="text" name="Age" {...formik.getFieldProps("Age")} /></dd>
                <dd className="text-danger">
                    {formik.touched.Name && (formik.errors.Age)? formik.errors.Age: null}
                </dd>
                <dt>Email</dt>
                <dd>
                    <input type="text" name="Email" {...formik.getFieldProps("Email")}/>
                </dd>
                <dd className="text-danger">
                    {formik.touched.Name && (formik.errors.Email)? formik.errors.Email: null}
                </dd>

            </dl>

            <button>Register</button>
        </form>
    </div>
)


}
