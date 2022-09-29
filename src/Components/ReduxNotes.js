let input = "  Javasctript    ";

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();
          

const result = wrapInDiv(toLowerCase(trim(input)));   // this is called functional composition in functional programming


// Moreover, we always read functional composition from right to left, meaning we first did trim of the input, then made it lowerCase and then we wrapit in the div



/*  

* LODASH

 It is the popular utility library for Javascript

 import {compose, pipe} from "lodash/fp";       // on the top

 let input = "  Javasctript    ";

 const tramsform = compose(wrapInDiv, toLowerCase, trim)    // in this there is no order which function will execute first, for that we will write the code of the pipe method on line 30

 transfom(input);
 
 // Alternate way of writing the above code


const transform = pipe(trim, toLowerCase, wrapInDiv);       // it will in the order from left to right
transform(input);


*/


/*
    * CURRYING 

    function add(a, b)
    {
        return a+b;
    }

        Instead of this, we will do

        function add(a)
        {
        return function (b){
            return a+b;
        };

        }

        const add2 = a=>b=> a+b;            // returns a+b, this is way of applying the curring

        const add1 = add(1);

        add(1)(5);


const trim = str => str.trim();
const wrap = type =>  str => `<type>${str}</type>`;
const toLowerCase = str => str.toLowerCase();


const transform = pipe(trim, toLowerCase, wrap("div"));
console.log(transform(input));

*/ 



/*

* IMMUTABILITY WHEN WORKING WITH OBJECTS

   const person = {name: "John"}

   // we should take the copy of the object and update the copy

 const updated =  Object.assign({}, person, {name:"Bob", age:30})                                // object.assign in that we can copy the content of the object into another object

   // Here in this case, we are assigning all the properties of the person object into the empty object
  //  And also third argument is the additional argument to add additional information into the object

console.log(updated);

or you can write

const updated = {...person, 
    
    address:{
        ...person.address,
        city:New York
    }
    name:"Bob"}


*/



/*

    * UPDATING ARRAYS

    const numbers = [1,2,3];

    const added = [...numbers, 4];

    // what if I want to add somewhere in the between

    const index = numbers.indexOf(2);

    const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];

    console.log(added);


*/ 


/*

    * IMMUTABLE JS

    let book = {title:"Harry Potter"};

    function publish(book)
    {
        book.isPublished = true;
    }

    publish(book);

    console.log(book);

*/


/*

* IMMER

import {produce} from 'immer';

let book = {title:"Harry Potter"};

function publish(book)
{
   return produce(book, draftBook =>{
        draftBook.isPublished = true;
    });
}

let updated = publish(book);

console.log(book);


*/




/*

{

    categories:[],
    products:[],
    cart:{},
    user:{}
}
    These 4 are called slice, just like the different departments in the company

    ACTIONS - plain js object represent, what just happened  (consider as event like onClick or so)
    STORE   - This includes our javascrip object where it stores all the state
    REDUCER - reducer for updating the slice of the store (consider as eventhandlers) and they are pure functions, meaning they don't mutate and they don't have any side function and they don't take any global state

    -   These are the three building blocks in redux application

    
- when the user performs any action, like adding item into the shopping cart, we create an action object and dispatch it and store object has dispatch method that takes an action and
 it will then it will forward this action to the reducer. Store is in-charge of calling the reducer always and reducer computes the new state and 
 returns it. Next, store will set the state internally and notify the UI components about t update these, and UI will update all these states.

- the advantage of doing this is that, it will log every action

- In creating the project we need to decide following things.

- Design the store
- Define the actions
- Create a reducer
- Setup the store

  
*/






/* 

- In redux we will always call the store to get the data in any component

- using action we can update the state

-   Reducer we use as the function as how to do that particular task for e.g. of increment and decrement in react.



There are 4 types

Action - What to do?
Reducer - How to do?
Store - object which holds the state of the application
Function Associated with Store - createStore(), dispatch(action) (It is used to trigger the action on how to do action ), getState (to get the current state)



    *   ACTION

- It is a plain js objects that has type field. Action tells what to do, but they don't tell how to do.


    * Action creater

- Action creater is something that creates an action and it is the pure function. 

e.g.  export const incNumber = (number) => {
    return {
        type: 'INCREMENT',
        payload: number
    }
}



*   REDUCER

-   Reducer are functions that take the current state and an action as arguments or parameter, and return a new state result

e.g. const changeTheNumber = (state=initialState, action) => {
    switch(action.type)
    {
        case 'INCREMENT': return state + action.payload;
        case 'DECREMENT': return state -1;
        default: return state;
    }
}



*   STORE
-   object which holds the state of the application 
-   The redux store bring together the state, actions and reducers that make up your app.
-   You only have single store in the Redux application
-   Every Redux store has a single root reducer function
-   The only way to change the state is to dispatch an action
-   Changes are made with pure Reducer Functions



NOTE:- npm i redux react-redux          // to install the react application
*/




/*

    *    useContext

-   It uses context memory
-   available for component and its child component
-   We will first create a createContext() method that will create a memory, inititally recommended it to be null
- Two things Provider and Injector. PRovider will locate the memory and find the value and injector will inject the value into the component and


*   useReducer

-   useReducer is the replacement of the redux method, previously we used to pass the data using the redux method. but we can use useReducer as well to

-   useReducer deals with two things. One is action and another is dispatch. 

-   Action means actions to perform and dispatch defines the data to store.  

-   Action indicates when to fetch the data 

-   We have reducer that is responsible for configuring the actions

 - Dispatch also indicates what actions to perform


 useReducer hooks takes two arguments (reducer, initialState)

 And reducers is a pure functin that takes a state and action and return a new state 

 - We always call dispatch whenever we want to change the state.  It is just like we are triggering the action.


*/