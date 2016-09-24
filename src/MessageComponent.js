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
                                    userName="Zac Snider"
                                    arriveTime="Just now"
                                    userMessage="Hi mate, how is everything"/>
                    <MessageContent profileImg="assets/img/ui-divya.jpg"
                                    userName="Divya Manian"
                                    arriveTime="40 mins."
                                    userMessage="Hi, I need your help with this."/>
                    <MessageContent profileImg="assets/img/ui-danro.jpg"
                                    userName="Dan Rogers"
                                    arriveTime="2 hrs."
                                    userMessage="Love your new Dashboard."/>
                    <MessageContent profileImg="assets/img/ui-sherman.jpg"
                                    userName="Dj Sherman"
                                    arriveTime="4 hrs."
                                    userMessage="Please, answer asap."/>
                    <li>
                        <a href="index.html#">See all messages</a>
                    </li>
                </ul>
            </li>
        );
    }
}

export default Message;