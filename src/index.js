import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.json';
// import { CookiesProvider } from 'react-cookie';


// import LoginComponent from './Components/LoginComponent'
// import RegisterComponent from './Components/RegisterComponent';
// import NetflixComponent from './Components/NetflixComponent';
// import DataBindingComponent from './Components/DataBindingComponent';
// import DataBindingComponentUsingClass from './Components/DataBindingComponentUsingClass';
// import DataBindingUsingStates from './Components/DataBindingUsingStates';
// import StatesUsingClass from './Components/StatesUsingClass';
// import ProductComponent from './Components/ProductComponent';
// import ProductComponent1 from './Components/ProductComponent1';
// import NestedProductComponent from './Components/NestedProductComponent';
// import FetchDemoComponent from './Components/FetchDemoComponent';
//  import EventComponent from './Components/EventComponent';
//  import FormComponent from './Components/FormComponent';
//  import FormikDemoComponent from './Components/FormikDemoComponent';
//  import FormikValidation from './Components/FormikValidation';
//  import YupValidation from './Components/YupValidation';
//  import ValidationComponent from './Components/ValidationComponent';
    // import AmazonIndex from './AmazonShopping/AmazonIndex';
    // import Home from './Components/Practice';
    // import ContextDemoComponent from './Components/ContextDemoComponent';
    // import ReducerDemoComponent from './Components/ReducerDemo';
    import UseReducerDemo from './Components/UseReducerDemo';
   
ReactDOM.render(
  <React.StrictMode>
    {/* You can render anything on the ReactDOM.render */} 
    {/* <div style ={{margin: '30px'}}>
    <h2>React-Shopping-Application</h2>
   <RegisterComponent/>
    
    </div>, */}

    {/* <NetflixComponent/> */}
   {/* <CookiesProvider>
   <AmazonIndex/>
   </CookiesProvider> */}
   {/* <Home/> */}
   {/* <ContextDemoComponent/> */}

   {/* <ReducerDemoComponent/> */}
   <UseReducerDemo/>

  </React.StrictMode>,
  
  document.getElementById('root')
  
);


