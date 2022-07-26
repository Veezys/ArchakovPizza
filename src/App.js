import React from "react";

import Header from "./components/Header";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

import { Route, Routes } from "react-router-dom";

import './scss/app.scss';

function App() {


    return (
      <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
          <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/"></Route>
          <Route path="*" element={<NotFound/>}></Route>
          </Routes>
        </div>
      </div> 
    </div>
    )
}

export default App;