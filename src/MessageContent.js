/**
 * Created by secret on 9/18/16.
 */

import React, {Component} from 'react';

class MessageContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <a href="index.html#">
                    <span className="photo"><img alt="avatar" src={this.props.profileImg}/></span>
                    <span className="subject">
                                    <span className="from">{this.props.name}</span>
                                    <span className="time">{this.props.time}</span>
                                    </span>
                    <span className="message">{this.props.message}</span>
                </a>
            </li>
        );
    }
}

export default MessageContent;