/**
 * Created by user on 16. 8. 31.
 */

import React, {Component} from 'react';
import TaskContent from './TaskContent'

class Task extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="dropdown">
                <a data-toggle="dropdown" className="dropdown-toggle" href="index.html#">
                    <i className="fa fa-tasks"/>
                    <span className="badge bg-theme">4</span>
                </a>
                <ul className="dropdown-menu extended tasks-bar">
                    <div className="notify-arrow notify-arrow-green"/>
                    <li>
                        <p className="green">You have 4 pending tasks</p>
                    </li>
                    <TaskContent btnStyle="success" nowValue={40}/>
                    <TaskContent btnStyle="warning" nowValue={60}/>
                    <TaskContent btnStyle="info" nowValue={80}/>
                    <TaskContent btnStyle="danger" nowValue={70}/>
                    <li>
                        <a href="#">See All Tasks</a>
                    </li>
                </ul>
            </li>
        );
    }
}

export default Task;