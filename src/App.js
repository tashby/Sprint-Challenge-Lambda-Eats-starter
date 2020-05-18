import React, {useState} from "react";
import HomePage from "./components/HomePage"
import Form from "./components/Form"
import {Route} from "react-router-dom"


const App = () => {
  return (
    <>
  <div>
   <Route path="/" component={HomePage} />
   <Route path="/pizza" component={Form} />
    </div>
    </>
  );
};
export default App;
