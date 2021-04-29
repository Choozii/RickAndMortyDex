import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import SearchResult from '../../components/SearchResult';
import { getSearchResult } from '../../redux/actions/itemActions';
import styles from './Searching.module.css';

const Searching = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    useEffect(()=>{
        dispatch(getSearchResult(location.state.words));
    },[])

    const movePage = () => {
        history.goBack();
      }
    
    const searchData = useSelector((state) => state.itemList.searchData);

    return (
    <>
        <Header/>
        <div className={styles.wrapper}>
        <section className={styles.section}>
            {searchData.length === 0?<div className={styles.labelWrapper}>
                <p className={styles.noResult}>NO RESULT</p></div>:<></>}
            {searchData.map(result => 
                <SearchResult character={result} id={result.id}/>
            )}        
        </section>
        </div>
    </>
    );
};

export default Searching;