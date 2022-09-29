import React from 'react'

import {ACTIONS} from './UseReducerDemo2.js';

export default function Todo({todo}) {
  return (
    <div>
      <span style={{color:todo.complete? '#AAA': '#000'}}>
        {todo.name}
    </span>
    <button >Toggle</button>
    <button onClick={()=>dispatch({type:ACTIONS.DELETETODO, payload: {id:todo.id}})}>Delete</button>
    </div>
  )
}
