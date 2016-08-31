/**
 * Created by user on 16. 8. 31.
 */

import React, {Component} from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';

class Message extends Component {
    render() {
        return (
            <li id="header_inbox_bar" class="dropdown">
                <span className="badge bg-theme">5</span>
                <DropdownButton className="fa fa-envelope-o">
                    <MenuItem eventKey="0">
                        <p className="green">You have 5 new messages</p>
                    </MenuItem>
                    <MenuItem eventKey="1">
                        <a href="index.html#">
                            <span className="photo"><img alt="avatar" src="assets/img/ui-zac.jpg"/></span>
                            <span className="subject">
                                    <span className="from">Zac Snider</span>
                                    <span className="time">Just now</span>
                                    </span>
                            <span className="message">
                                        Hi mate, how is everything?
                                    </span>
                        </a>
                    </MenuItem>
                    <MenuItem eventKey="2">
                        <a href="index.html#">
                            <span className="photo"><img alt="avatar" src="assets/img/ui-divya.jpg"/></span>
                            <span className="subject">
                                    <span className="from">Divya Manian</span>
                                    <span className="time">40 mins.</span>
                                    </span>
                            <span className="message">
                                     Hi, I need your help with this.
                                    </span>
                        </a>
                    </MenuItem>
                    <MenuItem eventKey="3">
                        <a href="index.html#">
                            <span className="photo"><img alt="avatar" src="assets/img/ui-danro.jpg"/></span>
                            <span className="subject">
                                    <span className="from">Dan Rogers</span>
                                    <span className="time">2 hrs.</span>
                                    </span>
                            <span className="message">
                                        Love your new Dashboard.
                                    </span>
                        </a>
                    </MenuItem>
                    <MenuItem eventKey="4">
                        <a href="index.html#">
                                        <span className="photo"><img alt="avatar"
                                                                     src="assets/img/ui-sherman.jpg"/></span>
                            <span className="subject">
                                    <span className="from">Dj Sherman</span>
                                    <span className="time">4 hrs.</span>
                                    </span>
                            <span className="message">
                                        Please, answer asap.
                                    </span>
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a href="index.html#">See all messages</a>
                    </MenuItem>
                </DropdownButton>
            </li>
        );
    }
}

export default Message;