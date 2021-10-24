import React from 'react';

const Input = (props) => {
    return(
        <input className={props.className} type="search" placeholder={props.placeholder} aria-label="Search" />
    );
}

export default Input;