import React from 'react'

import './scss/app.scss';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import Skeleton from './components/PizzaBlock/Skeleton';

function App() {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState([true]);
  let skeletonPizzas = [...new Array(8)];

  React.useEffect(() => {
      fetch('https://62de6bd09c47ff309e72e085.mockapi.io/items').then((res) => {
        return res.json();
      }).then((items) => {
        setPizzas(items);
        setIsLoading(false);
      })
  }, []);

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
              {isLoading ? skeletonPizzas.map((_, i) => (<Skeleton key={i}/>)) : pizzas.map((items) => (<PizzaBlock key={items.id} {...items}/>))}
             
            </div>
          </div>
        </div>
      </div>
  );
}
export default App;






















 {/* {pizzas.map((pizza) => (
                <PizzaBlock  key={pizza.id} {...pizza} />
              ))} */}