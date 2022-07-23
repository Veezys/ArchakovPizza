import React from "react";

import Categories from "./components/Categories";
import Header from "./components/Header";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

function App() {
    return (
      <div class="wrapper">
      <Header/>
      <div class="content">
        <div class="container">
          <div class="content__top">
          <Categories/>
          <Sort/>
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
          <PizzaBlock/>
          <PizzaBlock/>
          <PizzaBlock/>
          <PizzaBlock/>
          <PizzaBlock/>
          <PizzaBlock/>
          <PizzaBlock/>
          <PizzaBlock/>
          <PizzaBlock/>
          </div>
        </div>
      </div> 
    </div>
    )
}

export default App;