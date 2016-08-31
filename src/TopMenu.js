/**
 * Created by secret on 8/24/16.
 */

import React, {Component} from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import Task from './Task'
import Message from './Message'
import Login from './Login'

class TopMenu extends Component {
    render() {
        return (
            <header className="header black-bg">
                <div className="sidebar-toggle-box">
                    <OverlayTrigger placement="right" overlay={<Tooltip placement="right">Toggle Navigation</Tooltip>}>
                        <div className="fa fa-bars tooltips"></div>
                    </OverlayTrigger>
                </div>
                <a href="index.html" className="logo"><b>DASHGUM FREE</b></a>
                <div className="nav notify-row" id="top_menu">
                    <Task/>
                    <Message/>
                </div>
                <Login/>
            </header>
        );
    }
}

export default TopMenu;