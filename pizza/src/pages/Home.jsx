import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

function Home() {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState([true]);
  const [categoryIndex, setCategoryIndex] = React.useState(0);
  const [currentPopUpItem, setCurrentPopUpItem] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  let skeletonPizzas = [...new Array(8)];

  React.useEffect(() => {
    setIsLoading(true);

    const category = categoryIndex > 0 ? `category=${categoryIndex}` : '';
    const sortBy = currentPopUpItem.sortProperty.replace('-', '');
    const order = currentPopUpItem.sortProperty.includes('-') ? 'asc' : 'desc';

    fetch(
      `https://62de6bd09c47ff309e72e085.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((items) => {
        setPizzas(items);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryIndex, currentPopUpItem]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          categoryIndex={categoryIndex}
          onChangeCategory={(index) => setCategoryIndex(index)}
        />
        <Sort value={currentPopUpItem} onChangePopUpItem={(index) => setCurrentPopUpItem(index)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? skeletonPizzas.map((_, i) => <Skeleton key={i} />)
          : pizzas.map((items) => <PizzaBlock key={items.id} {...items} />)}
      </div>
    </div>
  );
}

export default Home;
