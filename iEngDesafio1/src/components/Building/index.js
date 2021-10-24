import React from 'react';
import Window from '../Window/index';
import './style.css';

export default function Building(props) {

    var app = [];

    if (props.windows) {
        for (let index = 0; index < parseInt(props.windows); index++) {
            app[index] = <Window />;
        }
    }

    return (
        <div className="col s6 m6 l6">
            <div className="predio">
                <div className="row">
                    {
                    props.children ? props.children : app.map(e=>e)
                    }
                </div>
            </div>
        </div> 
    )
}


