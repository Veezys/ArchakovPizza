


function Categories ({activeIndex, onClickCategory}) {

  const categories = ['Все', 'Мясные', 'Вегатарианские','Гриль', 'Острые', 'Закрытые']

  return (
        <div className="categories">
              <ul>
              {categories.map((item, index) => ( 
                <li key={index} onClick={() => onClickCategory(index)} className={activeIndex === index ? "active" : ''}>{item}</li>
              ))}
              </ul>
        </div>
    )
}

export default Categories;