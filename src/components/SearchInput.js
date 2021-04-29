import styles from './SearchInput.module.css';
import React, { useState } from "react";

const SearchInput = () => {
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
        <div className={styles.searchBar}>
        <input classNamae={styles.searchInput} type="search" placeholder="search the character..." value={words} onChange={getWords}></input>
        <button className={styles.searchButton} type="submit" onClick={fetchSearchResult}>SEARCH</button>
        </div>
    );
};

export default SearchInput;