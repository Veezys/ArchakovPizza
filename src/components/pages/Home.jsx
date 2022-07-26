import React from 'react'
import { useState, useEffect } from "react";

import Categories from "../Categories";
import Sort from "../Sort";
import PizzaBlock from "../pizzaBlock";
import  {Skeleton}  from "../pizzaBlock/Skeleton";

import '../../scss/app.scss';

function Home() {
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
    <div>
         <div className="content__top">
          <Categories/>
          <Sort/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__center">
          <div className="content__items">
            {
              isLoading === true ? [...new Array(6)].map((_, i) => <Skeleton key={i}/>)
              : pizzaItems.map((items) => (<PizzaBlock key={items.id} {...items}/>)) 
            }
         </div>
         </div>  
        
    </div>
    
  )
}

export default Home;