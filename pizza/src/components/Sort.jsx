import React from 'react';

function Sort({ value, onChangePopUpItem }) {
  const sortList = [
    { name: 'популярности (уб)', sortProperty: 'rating' },
    { name: 'популярности (вз)', sortProperty: '-rating' },
    { name: 'цене (уб)', sortProperty: 'price' },
    { name: 'цене (вз)', sortProperty: '-price' },
    { name: 'алфавиту (уб)', sortProperty: 'title' },
    { name: 'алфавиту (вз)', sortProperty: '-title' },
  ];
  const [popUp, setPopUp] = React.useState(false);
  const sortItem = value.name;

  const clickPopUp = (obj) => {
    setPopUp(!popUp);
    onChangePopUpItem(obj);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setPopUp(!popUp)}>{sortItem}</span>
      </div>
      {popUp && (
        <div className="sort__popup">
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => clickPopUp(obj)}
                className={value.sortProperty === sortList.sortProperty ? 'active' : ''}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
