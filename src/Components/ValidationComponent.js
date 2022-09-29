import React from 'react'
import {useFormik} from 'formik';
import * as yup from 'yup';

export default function ValidationComponent() {
  return  (
  <div className="container-fluid">
      <Formik 
      
      initialValues={
        { 
        Name: '',
        Age: 0,
        Email: '',
        City: ''
        }
      }

      validationSchema={
        yup.object({
            Name:yup.string()
                        .min(4, 'Name too short - Min 4 chars Required')
                        .max(10, 'Name too long - Max 10 chars only')
                        .required('User Name Require'),
        
            Age: yup.number()
            .required('Age Required'),
        
            Email: yup.string()
                        .email('Invalid Email')
                        .required('Email Required')
        })
    }
        onSubmit= {

         values => {
            alert(JSON.stringify(values))
        }
        
    }
      
      >

          {
              props => (
                  <div className = "container-fluid">
                    <h2>Register User</h2>

                    <Form>
                        <dl>
                            <dt>Name</dt>
                            <dd><Field type ="text" name ="Name"></Field></dd>
                            <dd className= "text-danger">
                                <ErrorMessage name="Name"></ErrorMessage>
                            </dd>

                            <dt>Age</dt>
                            <dd><Field type ="text" name ="Age"></Field></dd>
                            <dd className= "text-danger">
                                <ErrorMessage name="Age"></ErrorMessage>
                            </dd>


                            <dt>Email</dt>
                            <dd><Field type ="Email" name ="Email"></Field></dd>
                            <dd className= "text-danger">
                                <ErrorMessage name="Email"></ErrorMessage>
                            </dd>

                            <dt>City</dt>
                            <dd><Field as ="select" name ="City">
                                <option>Delhi</option>
                                <option>Hyd</option>
                                </Field>
                            
                            </dd>
                        </dl>
                        <button>Register</button>
                    </Form>
                  </div>
              )
          }

      </Formik>
</div>
)

}
