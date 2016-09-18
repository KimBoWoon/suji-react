/**
 * Created by user on 16. 8. 31.
 */

import React, {Component} from 'react';
import MessageContent from './MessageContent'

class Message extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li id="header_inbox_bar" className="dropdown">
                <a data-toggle="dropdown" className="dropdown-toggle" href="index.html#">
                    <i className="fa fa-envelope-o"/>
                    <span className="badge bg-theme">5</span>
                </a>
                <ul className="dropdown-menu extended inbox">
                    <div className="notify-arrow notify-arrow-green"/>
                    <li>
                        <p className="green">You have 5 new messages</p>
                    </li>
                    <MessageContent profileImg="assets/img/ui-zac.jpg"
                                    name="Zac Snider"
                                    time="Just now"
                                    message="Hi mate, how is everything"/>
                    <MessageContent profileImg="assets/img/ui-divya.jpg"
                                    name="Divya Manian"
                                    time="40 mins."
                                    message="Hi, I need your help with this."/>
                    <MessageContent profileImg="assets/img/ui-danro.jpg"
                                    name="Dan Rogers"
                                    time="2 hrs."
                                    message="Love your new Dashboard."/>
                    <MessageContent profileImg="assets/img/ui-sherman.jpg"
                                    name="Dj Sherman"
                                    time="4 hrs."
                                    message="Please, answer asap."/>
                    <li>
                        <a href="index.html#">See all messages</a>
                    </li>
                </ul>
            </li>
        );
    }
}

export default Message;