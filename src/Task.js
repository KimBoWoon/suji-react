/**
 * Created by user on 16. 8. 31.
 */

import React, {Component} from 'react';
import {DropdownButton, MenuItem, ProgressBar} from 'react-bootstrap';

class Task extends Component {
    render() {
        return (
            <li className="dropdown">
                <span className="badge bg-theme">4</span>
                <DropdownButton className="fa fa-tasks">
                    <MenuItem eventKey="0">
                        <p className="green">You have 4 pending tasks</p>
                    </MenuItem>
                    <MenuItem eventKey="1">
                        <a href="index.html#">
                            <div className="task-info">
                                <div className="desc">DashGum Admin Panel</div>
                                <div className="percent">40%</div>
                            </div>
                            <ProgressBar active bsStyle="success" now={40}/>
                        </a>
                    </MenuItem>
                    <MenuItem eventKey="2">
                        <a href="index.html#">
                            <div className="task-info">
                                <div className="desc">Database Update</div>
                                <div className="percent">60%</div>
                            </div>
                            <ProgressBar active bsStyle="warning" now={60}/>
                        </a>
                    </MenuItem>
                    <MenuItem eventKey="3">
                        <a href="index.html#">
                            <div className="task-info">
                                <div className="desc">Product Development</div>
                                <div className="percent">80%</div>
                            </div>
                            <ProgressBar active bsStyle="info" now={80}/>
                        </a>
                    </MenuItem>
                    <MenuItem eventKey="4">
                        <a href="index.html#">
                            <div className="task-info">
                                <div className="desc">Payments Sent</div>
                                <div className="percent">70%</div>
                            </div>
                            <ProgressBar active bsStyle="danger" now={70}/>
                        </a>
                    </MenuItem>
                    <MenuItem eventKey="5" className="external">
                        <a href="#">See All Tasks</a>
                    </MenuItem>
                </DropdownButton>
            </li>
        );
    }
}

export default Task;