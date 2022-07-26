import { useState } from "react";


function Categories () {
  const [activeIndex, setIndex] = useState(0);

  const categories = ['Все', 'Мясные', 'Вегатарианские','Гриль', 'Острые', 'Закрытые']

  function addIndex (i) {
    setIndex(i);
  }
  return (
        <div className="categories">
              <ul>
              {categories.map((item, index) => ( 
                <li key={index} onClick={() => addIndex(index)} className={activeIndex === index ? "active" : ''}>{item}</li>
              ))}
              </ul>
        </div>
    )
}

export default Categories;