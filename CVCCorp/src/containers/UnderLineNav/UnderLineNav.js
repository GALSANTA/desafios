import React from 'react';
import './underlinenav.css';

import { Book, JournalBookmark, Kanban, Box } from 'react-bootstrap-icons';

const UnderLineNave = (props) => {

    const[control, setControl] = React.useState([false, true, false, false]);

    return (
        <nav className="d-flex nav-tabs">
            <button className={`UnderlineNav-item ${control[0]?"selected":""}`} onClick={()=>{props.changeTab(0); setControl([true, false , false, false])}}>
                <span className="ms-3"><Book /></span>
                <span className="ms-2">Overview</span>
            </button>
            <button className={`UnderlineNav-item ${control[1]?"selected":""}`} onClick={()=>{props.changeTab(1);  setControl([false, true , false, false])}}>
                <span className="ms-3"><JournalBookmark /></span>
                <span className="ms-2">Repositories</span>
                <span className="badge bg-grey rounded-circle ms-2">{props.repos}</span>
            </button>
            <button className={`UnderlineNav-item ${control[2]?"selected":""}`} onClick={()=>{props.changeTab(2);  setControl([false, false , true, false])}}>
                <span className="ms-3"><Kanban /></span>
                <span className="ms-2">Projects</span>
            </button>
            <button className={`UnderlineNav-item ${control[3]?"selected":""}`} onClick={()=>{props.changeTab(3);  setControl([false, false , false, true])}}>
                <span className="ms-3"><Box /></span>
                <span className="ms-2">Packages</span>
            </button>
        </nav>
    )
}

export default UnderLineNave;