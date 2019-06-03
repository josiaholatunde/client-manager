import React from 'react'
import Client  from '../clients/Client';
import SideBar from './SideBar';
import './DashBoard.scss';

export default function Dashboard() {
    return (
        <div className="row">
            <div className="box-1">
                <Client />
            </div>
            <div className="box-2">
                <SideBar />
            </div>
        </div>
    )
}
