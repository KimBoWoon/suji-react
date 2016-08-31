/**
 * Created by user on 16. 8. 31.
 */

import React, {Component} from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

class Login extends Component {
    render() {
        return (
            <div className="top-menu">
                <ul className="nav pull-right top-menu">
                    <li><a className="logout" href="login.html">Logout</a></li>
                </ul>
            </div>
        );
    }
}

export default Login;