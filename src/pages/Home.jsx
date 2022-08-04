import React, { useContext } from 'react'
import { useState, useEffect} from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/pizzaBlock";
import  {Skeleton}  from "../components/pizzaBlock/Skeleton";

import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';
// import Pagination from '../pagination';

import '../scss/app.scss';
import { traceContext } from '../App';
import axios from 'axios';

function Home() {

    const activeIndexCategory =  useSelector(state => state.filter.categoryId);
    const sortType = useSelector(state => state.filter.sort.sortProperty);
    const dispatch = useDispatch();

    const {searchValue} = useContext(traceContext);
    const [isLoading, setIsLoading] = useState(true);
    const [pizzaItems, setPizzaItems] = useState([]);
    // const [currentPagination, setCurrentPagination] = useState(1);
    
    const onClickCategory = (id) => {
      dispatch(setCategoryId(id));
    }

    useEffect(() => {

      const category = activeIndexCategory > 0 ? `category=${activeIndexCategory}` : '';
      const sort = sortType.replace('-', '');
      const order = sortType.includes('-') ? 'asc' : 'desc';
      const search = searchValue ? `search=${searchValue}` : '';

      setIsLoading(true);
      // fetch(
      //   `https://62de6bd09c47ff309e72e085.mockapi.io/items?${category}&sortBy=${sort}&order=${order}&${search}`)
      // .then(res => res.json())
      // .then((items) => {
      //   setPizzaItems(items);
      //   setIsLoading(false);
      // })
      axios.get(`https://62de6bd09c47ff309e72e085.mockapi.io/items?${category}&sortBy=${sort}&order=${order}&${search}`)
      .then(res => {
        setPizzaItems(res.data);
        setIsLoading(false);
      });
    }, [activeIndexCategory, sortType, searchValue])


  return (  
    <div>
         <div className="content__top">
          <Categories categoryId={activeIndexCategory} onClickCategory={onClickCategory}/>
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
         {/* <Pagination currentPagination={currentPagination} setCurrentPagination={setCurrentPagination}/> */}
         </div>  
        
    </div>
    
  )
}

export default Home;