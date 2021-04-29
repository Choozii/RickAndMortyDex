import React from 'react';

const Accordion = ({title, contents=[]}) => {
    return (
        <div>
            <div>{title}</div>
            <ul>{contents.map(c=><li>{c}</li>)}</ul> 
        </div>
    );
};

export default Accordion;