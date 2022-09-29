import React, {useEffect} from 'react'
import React from 'react'

export default function SuccessComponent() 

{

  useEffect(()=>{
    alert('Success component mounted');
    // if I want to unmount the use effect then,

    return()=> {
      // it will perform action of unmount
      alert('Success Component Unmounted');
    }
  },[])
  return (
    <div>
      <h2>Login Success</h2>
    </div>
  )
}

export default function ErrorComponent() {

  useEffect(()=>{
    alert('Error component mounted');
    // if I want to unmount the use effect then,

    return()=> {
      // it will perform action of unmount
      alert('Error Component Unmounted');
    }
  },[])
  return (
    <div>
      <h2>Invalid username/Password</h2>
    </div>
  )
}


export default class LifeCycleDemo extends Component 
{
    constructor(props)
     {
        super(props);

        this.state={
            msg: '',
            UserName: '',
            Password: ''
        }

        this.handleUserName=this.handleUserName.bind(this);
        this.handlePassword=this.handlePassword.bind(this);

        handleUserName(e)
        {
          this.setState(
            {
              UserName: e.target.value,
              Password:this.state.Password
            }
           ) 
          
        }

        handlePassword(e)
        {
          this.setState(
              {
                UserName: this.state.UserName,
                Password: e.target.value,
              }
            )
          }
      
          LoginClick()
          {
            if(this.state.UserName== 'john' && this.state.Password == 'admin')
            {
              this.setState({
                msg: <SuccessComponent/>
              })
            }
            else
            {
              this.setState({
                msg: <ErrorComponent/>
              })
            }
          }
      }


  render() {
    return (
      <div className = "container-fluid">
        <dl>
          <dt>UserName</dt>
          <dd>
            <input type="text" onChange={this.handleUserName} name="UserName"/>
          </dd>
          <dt>Password</dt>
          <dd>
            <input type="password" onChange={this.handlePassword} name="Password"/>
          </dd>
        </dl>
        <button onClick={this.LoginClick}>Login</button>
        <div>
          <p>{this.state.msg}</p>
        </div>
      </div>
    )
  }
}




// When Login is success, it will access success component and on failed, it will load error component