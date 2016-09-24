/**
 * Created by secret on 8/24/16.
 */

import React, {Component} from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import Task from './TaskComponent'
import Message from './MessageComponent'
import Login from './Login'

class TopMenu extends Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     this.getTime();
    // }

    getTime() {
        let today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        // add a zero in front of numbers<10
        m = this.checkTime(m);
        s = this.checkTime(s);
        document.getElementsByClassName('showtime').innerHTML = h + ":" + m + ":" + s;
        // document.getElementsByClassName('showtime').innerHTML = <h1>Hi</h1>;

        let t = setTimeout(function () {
            this.getTime()
        }, 500);
    }

    checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    render() {
        let now = new Date();

        return (
            <header className="header black-bg">
                <div className="sidebar-toggle-box">
                    <OverlayTrigger placement="right"
                                    overlay={<Tooltip id="tooltip" placement="right">Toggle Navigation</Tooltip>}>
                        <div className="fa fa-bars tooltips"/>
                    </OverlayTrigger>
                </div>
                <a href="index.html" className="logo"><b>SUJI</b></a>
                <div className="nav notify-row" id="top_menu">
                    <ul className="nav top-menu">
                        <Task/>
                        <Message/>
                    </ul>
                </div>
                <div onLoad={this.getTime()}/>
                <div className="showtime"/>
                <div className="nav pull-right top-menu"/>
                <div classID="showtime"/>
                <Login/>
            </header>
        );
    }
}

export default TopMenu;