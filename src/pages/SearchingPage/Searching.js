import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import { getSearchResult } from '../../redux/actions/itemActions';
import styles from './Searching.module.css';
import NoResult from '../../assets/images/noResultImage.png';
import gsap from "gsap";
import CharacterCardContainter from '../../container/CharacterCardContainer';

const Searching = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const searchData = useSelector((state) => state.itemList.searchData);
    const noResultRef = useRef(null);

    useEffect(() => {  
        gsap.from(noResultRef.current, {
          opacity : 0, duration : 1, delay : .4, x: -30
        });
    }, []);


    useEffect(()=>{
        dispatch(getSearchResult(location.state.words));
    },[])
    
    return (
    <>
        <Header/>
        <div className={styles.wrapper}>
        <section className={styles.section}>
            {searchData.length === 0?
            <div ref = {noResultRef} className={styles.labelWrapper}>
                <img className={styles.noResultImg} src={NoResult}></img>
                <p className={styles.noResult}>NO RESULT</p></div>:<></>}
            {searchData.map(result => 
                <CharacterCardContainter character={result}/>)}        
        </section>
        </div>
    </>
    );
};

export default Searching;