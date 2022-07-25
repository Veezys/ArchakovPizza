import React from "react";
import { useState, useEffect } from "react";

import Categories from "./components/Categories";
import Header from "./components/Header";
import Sort from "./components/Sort";
import PizzaBlock from "./components/pizzaBlock";
import  {Skeleton}  from "./components/pizzaBlock/Skeleton";

function App() {

    const [isLoading, setIsLoading] = useState(true);
    const [pizzaItems, setPizzaItems] = useState([]);

    useEffect(() => {
      fetch('https://62de6bd09c47ff309e72e085.mockapi.io/items')
      .then(res => res.json())
      .then((items) => {
        setPizzaItems(items);
        setIsLoading(false);
      })
    }, [])

    return (
      <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
          <div className="content__top">
          <Categories/>
          <Sort/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              isLoading === true ? [...new Array(6)].map((_, i) => <Skeleton key={i}/>)
              : pizzaItems.map((items) => (<PizzaBlock key={items.id} {...items}/>))
            }
          </div>
        </div>
      </div> 
    </div>
    )
}

export default App;