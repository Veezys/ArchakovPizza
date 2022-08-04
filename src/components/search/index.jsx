
import { useCallback, useRef, useState } from 'react';
// import debounce from 'lodash.debounce';
import style from './Search.module.scss';

import imgSearch from '../../assets/icons/search_icon.png';
import imgClose from '../../assets/icons/close.png';
import debounce from 'lodash.debounce';

function Search({setSearchValue}) {

  const [value, setValue] = useState('');

  const inputRef = useRef();

  const clearInput = () => {
    setValue('');
    setSearchValue('');
    inputRef.current.focus();
  }

  const updateChangeInput = useCallback(
     debounce((event) => {
      setSearchValue(event);
    }, 250),
    [],
  );
  
  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateChangeInput(event.target.value);
  }


  return (
    <div className={style.root}>
        <img className={style.searchIcon} src={imgSearch} alt="search"/>
        <input ref={inputRef} value={value} onChange={(event) => onChangeInput(event)} className={style.input} placeholder="Поиск пиццы.."/>
        {value && <img onClick={clearInput} className={style.closeIcon} src={imgClose} alt="close"/>}
    </div>
  )
}

export default Search;