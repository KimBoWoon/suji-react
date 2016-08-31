/**
 * Created by user on 16. 8. 31.
 */

import React, {Component} from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';

class Task extends Component {
    render() {
        return (
            <DropdownButton className="fa fa-tasks">
                <span className="badge bg-theme">4</span>
                <MenuItem eventKey="1">
                    <a href="index.html#">
                        <div className="task-info">
                            <div className="desc">DashGum Admin Panel</div>
                            <div className="percent">40%</div>
                        </div>
                        <div className="progress progress-striped">
                            <div className="progress-bar progress-bar-success" role="progressbar"
                                 aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"
                                 style={{width: 40}}>
                                <span className="sr-only">40% Complete (success)</span>
                            </div>
                        </div>
                    </a>
                </MenuItem>
                <MenuItem eventKey="2">
                    <a href="index.html#">
                        <div className="task-info">
                            <div className="desc">Database Update</div>
                            <div className="percent">60%</div>
                        </div>
                        <div className="progress progress-striped">
                            <div className="progress-bar progress-bar-warning" role="progressbar"
                                 aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                 style={{width: 60}}>
                                <span className="sr-only">60% Complete (warning)</span>
                            </div>
                        </div>
                    </a>
                </MenuItem>
                <MenuItem eventKey="3">
                    <a href="index.html#">
                        <div className="task-info">
                            <div className="desc">Product Development</div>
                            <div className="percent">80%</div>
                        </div>
                        <div className="progress progress-striped">
                            <div className="progress-bar progress-bar-info" role="progressbar"
                                 aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                                 style={{width: 80}}>
                                <span className="sr-only">80% Complete</span>
                            </div>
                        </div>
                    </a>
                </MenuItem>
                <MenuItem eventKey="4">
                    <a href="index.html#">
                        <div className="task-info">
                            <div className="desc">Payments Sent</div>
                            <div className="percent">70%</div>
                        </div>
                        <div className="progress progress-striped">
                            <div className="progress-bar progress-bar-danger" role="progressbar"
                                 aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"
                                 style={{width: 70}}>
                                <span className="sr-only">70% Complete (Important)</span>
                            </div>
                        </div>
                    </a>
                </MenuItem>
                <MenuItem eventKey="5" className="external">
                    <a href="#">See All Tasks</a>
                </MenuItem>
            </DropdownButton>
        );
    }
}

export default Task;