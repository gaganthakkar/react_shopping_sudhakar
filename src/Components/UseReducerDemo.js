import {useReducer} from 'react';

const initialState = {count:0}          // when using reducer and useReducer we generally pass an object instead of an actual value like 0 or 1

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

const reducer = (state, action) => {
    switch(action.type) {
        case ACTIONS.INCREMENT: return {count: state.count + 1}       // here state indicates the cuurent state of the appliaction, as of now it is 0 
        case ACTIONS.DECREMENT: return {count: state.count - 1}
        default:  return state;
    }
}

export default function UseReducerDemo(){
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state, initialState);

// here state = initialState and dispatch = reducer

// At first state = initialState, when the dispatch method triggers the action, it will return to the reducer and reducer = state and that is
// how state updates

return(
  <div className="container-fluid">
      <h3>{state.count}</h3>
        <div>
      <button onClick = {()=> dispatch({type: ACTIONS.INCREMENT})}>Increment</button>
     

      <button onClick = {()=> dispatch({type:ACTIONS.DECREMENT})}>Decrement</button>
      </div>
  </div>

)



}

