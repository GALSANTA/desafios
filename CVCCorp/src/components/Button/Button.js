import React from 'react';

const Button = (props) => {
    
    const [state, setState] = React.useState(false);

    return(
        <button className={props.className} onClick={() => setState(!state)}>
        {
            props.icon ? (<span className="me-1">{props.icon}</span>)  : <></>
        }
        <span>{state ? props.unName : props.name}</span>
    </button>
    )
}

export default Button;