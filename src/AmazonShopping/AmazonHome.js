import React from 'react';
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

export default function AmazonHome() {

  useEffect(() => {
    if(cookies.username==undefined) {
      history.pushState('/login');
    }

    else
    {
      setUserName(cookies.uesrname);
    }

  }, []);

  function Signout()
  {
    removeCookie('username');
    history.pushState('/login');
  }

  return (
    <div>
      <h1>Amazon Home</h1>

      <p>Online Shopping Store</p>
            
    </div>
  )
}




