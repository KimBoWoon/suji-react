/**
 * Created by secret on 8/24/16.
 */

import React, {Component} from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import Task from './TaskComponent'
import Message from './MessageComponent'
import Login from './Login'

class TopMenu extends Component {
    render() {
        return (
            <header className="header black-bg">
                <div className="sidebar-toggle-box">
                    <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip" placement="right">Toggle Navigation</Tooltip>}>
                        <div className="fa fa-bars tooltips"/>
                    </OverlayTrigger>
                </div>
                <a href="index.html" className="logo"><b>DASHGUM FREE</b></a>
                <div className="nav notify-row" id="top_menu">
                    <ul className="nav top-menu">
                        <Task/>
                        <Message/>
                    </ul>
                </div>
                <Login/>
            </header>
        );
    }
}

export default TopMenu;