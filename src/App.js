import React, {useState} from "react";
import HomePage from "./components/HomePage"
import OrderForm from "./components/OrderForm"
import {Route} from "react-router-dom"


const App = () => {
  return (
    <>
  <div >
   <Route path="/" component={HomePage} />
   <Route path="/pizza" component={OrderForm} />
    </div>
    </>
  );
};
export default App;
