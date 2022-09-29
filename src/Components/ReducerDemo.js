import React, {useReducer} from 'react';         // useReducer is the alternative or redux method
const initialState = {count:0}

function reducer(state, action)
{
    // reducer function contains state to store the value and action to define

    switch(action.type)
    {
        case'increment':
        return {count: state.count + 1} ;        // meaning the function reducer is returning the count and must be used by the component

        case'decrement':
        return { count: state.count - 1};

        default:
            console.log(`unable to execute`);
    }
}


export default function ReducerDemoComponent() {

    const[state, dispatch] = useReducer(reducer, initialState);     // state uses the reducer and dispatch uses the  initialState
   // the count returned from the line 11, will goes to the reducer and it goes to the state
    return (
      <div className="container-fluid"> 
         <h2> [{state.count}]Likes</h2>

         <button onClick = {()=> dispatch({type: 'increment'})}>Like</button>   
         {/* we can dispatch the action type, it indicates what actions to perform, in this the action it is telling is increment */}

         <button onClick = {()=> dispatch({type: 'decrement'})}>Dislike</button>

      </div>
    )
  }

