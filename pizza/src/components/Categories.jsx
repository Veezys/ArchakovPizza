import React from 'react';

function Categories({ categoryIndex, onChangeCategory }) {
  const pizzas = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {pizzas.map((value, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={categoryIndex === i ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
