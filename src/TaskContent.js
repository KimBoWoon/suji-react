/**
 * Created by secret on 9/18/16.
 */

import React, {Component} from 'react';
import {ProgressBar} from 'react-bootstrap';

class TaskContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <a href="index.html#">
                    <div className="task-info">
                        <div className="desc">DashGum Admin Panel</div>
                        <div className="percent">40%</div>
                    </div>
                    <ProgressBar active bsStyle={this.props.btnStyle} now={this.props.nowValue}/>
                </a>
            </li>
        );
    }
}

export default TaskContent;