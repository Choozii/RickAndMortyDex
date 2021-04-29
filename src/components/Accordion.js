import React from 'react';
import styles from './Accordion.module.css';

const Accordion = ({title, contents=[]}) => {
    return (
        <div>
            <div>{title}</div>
            <ul>{contents.map(c=><li>{c}</li>)}</ul> 
        </div>
    );
};

export default Accordion;