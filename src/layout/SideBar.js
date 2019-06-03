import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.scss';

function SideBar() {
    return (
        <Link to="/client/add" className="btn">
            <i className="fa fa-plus" style={{marginRight: '.3rem'}}></i>New
        </Link>
    )
}

export default SideBar;
