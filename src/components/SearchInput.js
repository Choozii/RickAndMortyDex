import styles from './SearchInput.module.css';
import React, { useState } from "react";
import { useHistory } from 'react-router';

const SearchInput = () => {
    const [words, setWords] = useState("");
    const history = useHistory();
    const getWords = e => {
        setWords(e.target.value);
    }
    const fetchSearchResult = () =>{
        setWords("");
        history.push({
          pathname:`searching/${words}`,
        state:{words:words}
      });
    }

    return (
        <div className={styles.searchBar}>
        <input classNamae={styles.searchInput} type="search" onKeyUp={()=>{if(window.event.keyCode === 13) fetchSearchResult()}} placeholder="search the character..." value={words} onChange={getWords}></input>
        <button className={styles.searchButton} type="submit" onClick={fetchSearchResult}>SEARCH</button>
        </div>
    );
};

export default SearchInput;