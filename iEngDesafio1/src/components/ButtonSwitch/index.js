import React from 'react';

export default function ButtonSwitch(props) {
    return (
        <div className="switch">
            <label>
                <input type="checkbox" onClick={props.onClick}/>
                <span className="lever"></span>
            </label>
        </div>
    )
}