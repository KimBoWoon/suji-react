/**
 * Created by user on 16. 8. 31.
 */

import React, {Component} from 'react';
import {ProgressBar} from 'react-bootstrap';

class Task extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openSubmenuFlag: false
        };
    }

    showDropdown() {
        this.setState({
            openSubmenuFlag: !this.state.openSubmenuFlag,
            openSubmenuToggle: this.state.openSubmenuToggle
        });

        if (this.state.openSubmenuFlag) {
            this.setState({
                openSubmenuToggle: "dropdown open"
            });
        }
        else {
            this.setState({
                openSubmenuToggle: "dropdown"
            });
        }
    }

    render() {
        return (
            <li className={this.state.openSubmenuToggle}>
                <a data-toggle="dropdown" className="dropdown-toggle" href="index.html#"
                   onClick={this.showDropdown.bind(this)}>
                    <i className="fa fa-tasks"/>
                    <span className="badge bg-theme">4</span>
                </a>
                <ul className="dropdown-menu extended tasks-bar">
                    <div className="notify-arrow notify-arrow-green"/>
                    <li>
                        <p className="green">You have 4 pending tasks</p>
                    </li>
                    <li>
                        <a href="index.html#">
                            <div className="task-info">
                                <div className="desc">DashGum Admin Panel</div>
                                <div className="percent">40%</div>
                            </div>
                            <ProgressBar active bsStyle="success" now={40}/>
                        </a>
                    </li>
                    <li>
                        <a href="index.html#">
                            <div className="task-info">
                                <div className="desc">Database Update</div>
                                <div className="percent">60%</div>
                            </div>
                            <ProgressBar active bsStyle="warning" now={60}/>
                        </a>
                    </li>
                    <li>
                        <a href="index.html#">
                            <div className="task-info">
                                <div className="desc">Product Development</div>
                                <div className="percent">80%</div>
                            </div>
                            <ProgressBar active bsStyle="info" now={80}/>
                        </a>
                    </li>
                    <li>
                        <a href="index.html#">
                            <div className="task-info">
                                <div className="desc">Payments Sent</div>
                                <div className="percent">70%</div>
                            </div>
                            <ProgressBar active bsStyle="danger" now={70}/>
                        </a>
                    </li>
                    <li>
                        <a href="#">See All Tasks</a>
                    </li>
                </ul>
            </li>
        );
    }
}

export default Task;