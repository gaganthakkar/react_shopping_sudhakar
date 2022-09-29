import {useReducer, useState} from 'react';
import Todo from './Todo.js';


// const initialState = {count:0}

export const ACTIONS = {
    ADDTODO: "addtodo",
    TOGGLETODO: "toggletodo",
    DELETETODO: "deletetodo"
}

const reducer = (todos, action)=>
{
    switch(action.type)
    {
      case ACTIONS.ADDTODO: 
        return [...todos, newTodo(action.payload.name)];

        case ACTIONS.TOGGLETODO:
            return todos.map(todo=>{
                if(todo.id===action.payload.id)
                {
                    return{...todo,complete:!todo.complete}
                }
                else{
                    return todo
                }
            })

            case ACTIONS.DELETETODO:
            return todos.filter(todo => todo.id !== action.paload.id)

            default: return todos
    }
}


function newTodo(name)
{
    return {id: Date.now(), name:name, complete: false}
}


export default function UseReducerDemo2()
{
    const[todos, dispatch] = useReducer(reducer, []);
    const[name,setName] = useState('');

    function handleSubmit(e)
    {
        e.preventDefault();                     // it will prevent the page from refreshing
        dispatch({type:ACTIONS.ADDTODO, payload: {name: name}});
        setName('');
    }

return(
    <div>
    <form onSubmit= {handleSubmit}>
      <input type="text" value ={name} onChange={(e)=> setName(e.target.value)}/>
    </form>
{
todos.map(todo =>
{
  return  <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
})
}
    </div>
)
}