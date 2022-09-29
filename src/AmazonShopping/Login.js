import React from 'react';
import {useHistory} from 'react-router-dom';
import useState from 'react';
import {useCookies} from 'react-cookie';


export default function Login() {

    const[users, setUsers] = useState([{UserName:'john_nit', Password: 'john@12'}, {UserName: 'david_admin', Password: 'admin11'}]);
    const[userDetails, setUserDetails] = useState({UserName: '', Password: ''});
    const[cookies, setCookie] = useCookies(['username']);   // username here is the name of the cookie

    const history = useHistory();


    function NameChange(e)
    { 
        setUserDetails({UserName: e.target.value});
    }


    function PasswordChange(e)
    {
        setUserDetails(
    {
            UserName: userDetails.UserName,
            Password: e.target.value
    });
    }

    function LoginClick()
    {
        // console.log(userDetails);
        for(var user of users)
        {
            if(user.UserName==userDetails.UserName && user.Password==userDetails.Password)
            {
                setCookie('username', userDetails.UserName, {path: '/'});                 // name of the cookie, what value does it store and path   
                history.push('/home');
                break;
            }

            else{
                history.push('/error');
            }
        }
    }
  return (
    <div>
      <h3>User Login</h3>

      <dl>
          <dt>User Name</dt>
          <dd><input type="text" onChange={NameChange}/></dd>
          <dt>Password</dt>
          <dd><input type="password" onChange={PasswordChange}/></dd>
      </dl>

      <button onChange={LoginClick}>Login</button>
    </div>
  )
}
