import React from 'react';

export default function Home() {

  const handleClick = () =>
  {
   alert("clicked");
  }

  const handleClickAgain = (name) =>
  {
    alert("hello " + name)
  }
  
  return (
    <div>
      <h2>Homepage</h2>
     <button onClick={handleClick}>click me</button>
     <button onClick={()=>{
         handleClickAgain("gagan");
     }}>click me again</button>
    </div>
  )
}

