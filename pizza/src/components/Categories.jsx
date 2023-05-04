import React from 'react';

function Categories() {
  const [categoryIndex, setCategoryIndex] = React.useState(0);
  const pizzas = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const clickCategory = (index) => {
    setCategoryIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {pizzas.map((value, i) => (
          <li
            key={i}
            onClick={() => clickCategory(i)}
            className={categoryIndex === i ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
