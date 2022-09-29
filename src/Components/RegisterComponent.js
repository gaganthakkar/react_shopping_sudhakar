// import React from 'react'
  
// export default class RegisterComponent extends React.Component 
// {
//     title = 'Register User';       // here title is the property and not variable, coz we cannot use variable in class and to use property
//                                    // dynamically, we use this.title
//     render()
//     {
//         return (
//             <>
//                 <h3>{this.title}</h3>

//                 <dl className='w-25'>
//                     <dt>UserName</dt>
//                     <dd><input type="text" className = 'form-control'/></dd>
//                     <dt>Password</dt>
//                     <dd><input type="password" className = 'form-control'/></dd>
//                     <dt>Email</dt>
//                     <dd><input type="email" className = 'form-control'/></dd>
//                     <div className= 'd-grid'>
//                     <button className ="btn btn-primary"><span className="bi bi-people"></span>Login</button>
//                     </div>
//                 </dl>

               
//             </>
//         )
//     }
// }


import React, { Component } from 'react'

export default class RegisterComponent extends Component {
  render() {
    return (
      <div className="container-fluid">
          <h3>{this.title}</h3>

                <dl className='w-25'>
                    <dt>UserName</dt>
                    <dd><input type="text" className = 'form-control'/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className = 'form-control'/></dd>
                    <dt>Email</dt>
                    <dd><input type="email" className = 'form-control'/></dd>
                    
                </dl>
                <div className= 'd-grid w-10'>
                    <button className ="btn btn-primary w-10"><span className="bi bi-people"></span>Login</button>
                    </div>
      </div>
    )
  } 
}
