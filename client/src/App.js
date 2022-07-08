import React from "react";
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage"
import Home from "./components/Home";

import './App.css';
import DetailCountry from "./components/DetailCountry";
import CreateActivity from "./components/CreateActivity";

function App() {
  return (
    <BrowserRouter>
    <div >
    <Routes>
    <Route exact path='/' element ={<LandingPage/>}/>
    <Route exact path='/home' element ={<Home/>}/>
    <Route exact path='/activity' element ={<CreateActivity/>}/>
    <Route exact path='/home/:cca3' element ={<DetailCountry/>}/>


    </Routes>
    
    </div>
    </BrowserRouter>
    
  );
}

export default App;
