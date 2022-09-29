import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom'; // useLocation is a router hook, to find the location
import AmazonHome from './AmazonHome';
import Categories from './Categories';
import Details from './Details';
import Electronics from './Electronics';
import Fashion from './Fashion';
import Footwear from './Footwear';
import Login from './Login';
import NotFound from './NotFound';
import ProductsList from './ProductsList';


export default function AmazonIndex()
{
    return(
        <div className ="container-fluid">
            {/* Nov everthing should come under one navigation for that we need enclosed the entire configuration in the Router */}
            <Router>
                <header className="bg-danger text-white text-center">
                    <h1>Amazon Shopping</h1>
                </header>

                <section>
                    <div className ="row">
                        <div className ="col-3">
                            <nav>
                                <ul className="list-unstyled d-grid" >
                                    <li>
                                        <Link to="/home" className = "btn btn-danger mb-2 w-100">Home</Link>
                                    </li>

                                    <li>
                                        <Link to="/electronics" className = "btn btn-danger mb-2 w-100">Electronics</Link>
                                    </li>

                                    <li>
                                        <Link to="/footwear" className = "btn btn-danger mb-2 w-100">Footwear</Link>
                                    </li>

                                    <li>
                                        <Link to="/fashion" className = "btn btn-danger mb-2 w-100">Fashion</Link>
                                    </li>

                                   
                                    <li>
                                        <Link to="/categories" className = "btn btn-danger mb-2 w-100">Categories</Link>
                                    </li>

                                    <li>
                                        <Link to="/login" className = "btn btn-danger mb-2 w-100">Login</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className ="col-9">
                            {/* In which area you want to render the component, there we use switch and inside switch we use routes */}
                            <Routes>
                                <Route exact path = "/">         {/* only / means you are not requesting anything */}
                                  <AmazonHome/>        
                                </Route>

                                <Route path = "/home">
                                    <Navigate to = "/"/>        {/* meaning it will redirect to its original path that is / in amazonhome */}                          
                                </Route>

                                <Route path = "/electronics">
                                    <Electronics/>
                                </Route>

                                <Route path = "/footwear">
                                    <Footwear/>
                                </Route>

                                <Route path = "/fashion">
                                    <Fashion/>
                                </Route>

                                <Route path = "*">
                                    <NotFound/>
                                </Route>

                                <Route path = "/products/:category">                                              
                                    <ProductsList/>
                                </Route>

                                <Route path="/categories">
                                    <Categories/>
                                </Route>

                                <Route path="/details/:id">
                                    <Details/>
                                </Route>

                                <Route path = "/login">
                                    <Login/>
                                </Route>

                                <Route path = "/error">
                                    <Error/>
                                </Route>

                                <Route path="/register">
                                    <Register/>
                                </Route>

                            </Routes>
                        </div>
                    </div>
                </section>
            </Router>

        </div>
    )
}
 

