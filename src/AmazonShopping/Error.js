import React from 'react';
import {Link} from 'react-router-dom';


export default function Error() {
  return (
    <div>
      <h3 className="text-danger">Invalid Credentials</h3>
          <Link to ="/login">Try Again</Link>
  
    </div>
  )
}
