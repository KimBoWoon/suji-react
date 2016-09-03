/**
 * Created by user on 16. 8. 31.
 */

import React, {Component} from 'react';

class Message extends Component {
    constructor(props){
        super(props);

        this.state = {
            openSubmenuFlag: false
        };
    }

    showDropdown() {
        this.state.openSubmenuFlag = !this.state.openSubmenuFlag;

        if (this.state.openSubmenuFlag)
            this.state.openSubmenuToggle = "dropdown open";
        else
            this.state.openSubmenuToggle = "dropdown";

        this.setState({
            openSubmenuToggle: this.state.openSubmenuToggle
        });
    }

    render() {
        return (
            <li id="header_inbox_bar" className={this.state.openSubmenuToggle}>
                <a data-toggle="dropdown" className="dropdown-toggle" href="index.html#" onClick={this.showDropdown.bind(this)}>
                    <i className="fa fa-envelope-o"/>
                    <span className="badge bg-theme">5</span>
                </a>
                <ul className="dropdown-menu extended inbox">
                    <div className="notify-arrow notify-arrow-green"/>
                    <li>
                        <p className="green">You have 5 new messages</p>
                    </li>
                    <li>
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
                    </li>
                    <li>
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
                    </li>
                    <li>
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
                    </li>
                    <li>
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
                    </li>
                    <li>
                        <a href="index.html#">See all messages</a>
                    </li>
                </ul>
            </li>
        );
    }
}

export default Message;