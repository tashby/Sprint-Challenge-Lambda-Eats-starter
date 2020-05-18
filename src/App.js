import React, {useState} from "react";
import HomePage from "./components/HomePage"
import {Route} from "react-router-dom"


const App = () => {
  return (
    <>
  <div>
   <Route path="/" component={HomePage} />
    </div>
    </>
  );
};
export default App;
