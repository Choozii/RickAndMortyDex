import React, { useState } from "react";
import CheckedIcon from "../assets/images/icon_checked.svg";
import UnCheckedIcon from "../assets/images/icon_unchecked.svg";
import styles from './FilteringToggle.module.css';

const FilteringToggle = ({ handleClick, checked }) => {
  let imgSrc = checked ? CheckedIcon : UnCheckedIcon;
  const [words, setWords] = useState("");
  const getWords = e => {
    setWords(e.target.value);
    console.log(e.target.value )
  }
  const fetchSearchResult = () =>{
    console.log(words); //TODO:fetch service api
    setWords("");
  }
  return (
    <div className={styles.header}>
      <button className={styles.checkboxImage} onClick={handleClick}>
        <img src={imgSrc} alt="버튼 : 체크박스" />
      </button>
      <div className={styles.checkboxLabel}>BOOKMARK</div>
      <div className={styles.searchBar}>
        <input classNamae={styles.searchInput} type="search" placeholder="search the character..." value={words} onChange={getWords}></input>
        <button className={styles.searchButton} type="submit" onClick={fetchSearchResult}>SEARCH</button>
        </div>
    </div>
  );
};

export default FilteringToggle;
