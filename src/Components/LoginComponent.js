// We need to create the component using javascript function

// export default function LoginComponent()
// {
//     const title = "User Login";
//     return(
//         <div className="container-fluid">   
//             <h2>{title}</h2>

//             <dl>
//                 <dt>User Name</dt>
//                 <dd>
//                     <input type="text"/>
//                 </dd>

//                 <dt>Password</dt>
//                 <dd>
//                     <input type="Password"/>
//                 </dd>
//             </dl>
//             <button>Login</button>
//         </div>
//     )
// }


import React from 'react'

export default function LoginComponent() {

    const title = "User Login"
  return (
    <div className="container-fluid">
      <h2>{title}</h2>

        <dl>
            <dt>Username</dt>
            <dd><input type="text" className="form-control w-25"/></dd>

            <dt>Password</dt>
            <dd><input type="password" className="form-control w-25"/></dd>
        </dl>
        <button className="btn btn-primary w-10">Login</button>

    </div>
  )
}




