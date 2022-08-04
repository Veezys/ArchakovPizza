import React  from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from './pages/Cart';


import './scss/app.scss';

export const traceContext = React.createContext('');

function App() {
    const [searchValue, setSearchValue] = useState('');

    return (
    <traceContext.Provider value={{searchValue, setSearchValue}}>
      <div className="wrapper">
      <Header />
        <div className="content">
          <div className="container">
            <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/"></Route>
            <Route path="/cart.html" element={<Cart/>}/>
            <Route path="*" element={<NotFound/>}></Route>
            </Routes>
          </div>
        </div> 
      </div>
    </traceContext.Provider>
    )
}

export default App;