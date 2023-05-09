import React from 'react'

import './scss/app.scss';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

function App() {
  
  let [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
      fetch('https://62de6bd09c47ff309e72e085.mockapi.io/items').then((res) => {
        return res.json();
      }).then((items) => {
        setPizzas(items);
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
              {pizzas.map((pizza) => (
                <PizzaBlock key={pizza.id} {...pizza} />
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}
export default App;
