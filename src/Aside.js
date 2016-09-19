/**
 * Created by secret on 8/24/16.
 */

import React, {Component} from 'react';

class Aside extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside>
                <div id="sidebar" className="nav-collapse ">
                    <ul className="sidebar-menu" id="nav-accordion">
                        <p className="centered"><a href="profile.html"><img src="assets/img/SUJI_no_profile.png"
                                                                            className="img-circle" width="60"
                                                                            role="presentation"/></a></p>
                        <h5 className="centered">SUJI</h5>
                        <li className="mt">
                            <a className="active" href="index.html">
                                {/*<i className="fa fa-dashboard"/>*/}
                                <span>SALES</span>
                            </a>
                        </li>
                        <li className="sub-menu">
                            <a href="javascript:;">
                                {/*<i className="fa fa-desktop"/>*/}
                                <span>REGISTER</span>
                            </a>
                            <ul className="sub">
                                <li><a href="general.html">General</a></li>
                                <li><a href="buttons.html">Buttons</a></li>
                                <li><a href="panels.html">Panels</a></li>
                            </ul>
                        </li>
                        <li className="sub-menu">
                            <a href="javascript:;">
                                {/*<i className="fa fa-cogs"/>*/}
                                <span>MANAGEMENT</span>
                            </a>
                            <ul className="sub">
                                <li><a href="calendar.html">Calendar</a></li>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li><a href="todo_list.html">Todo List</a></li>
                            </ul>
                        </li>
                        {/*<li className="sub-menu">*/}
                            {/*<a href="javascript:;">*/}
                                {/*<i className="fa fa-book"/>*/}
                                {/*<span>ITEMS</span>*/}
                            {/*</a>*/}
                            {/*<ul className="sub">*/}
                                {/*<li><a href="blank.html">Blank Page</a></li>*/}
                                {/*<li><a href="login.html">Login</a></li>*/}
                                {/*<li><a href="lock_screen.html">Lock Screen</a></li>*/}
                            {/*</ul>*/}
                        {/*</li>*/}
                        <li className="sub-menu">
                            <a href="javascript:;">
                                {/*<i className="fa fa-tasks"/>*/}
                                <span>CUSTOMER</span>
                            </a>
                            <ul className="sub">
                                <li><a href="form_component.html">Form Components</a></li>
                            </ul>
                        </li>
                        <li className="sub-menu">
                            <a href="javascript:;">
                                {/*<i className="fa fa-tasks"/>*/}
                                <span>SETTINGS</span>
                            </a>
                            <ul className="sub">
                                <li><a href="form_component.html">Form Components</a></li>
                            </ul>
                        </li>
                        <li className="sub-menu">
                            <a href="javascript:;">
                                {/*<i className="fa fa-th"/>*/}
                                <span>HELP</span>
                            </a>
                            <ul className="sub">
                                <li><a href="basic_table.html">Basic Table</a></li>
                                <li><a href="responsive_table.html">Responsive Table</a></li>
                            </ul>
                        </li>
                        {/*<li className="sub-menu">*/}
                            {/*<a href="javascript:;">*/}
                                {/*<i className=" fa fa-bar-chart-o"/>*/}
                                {/*<span>Charts</span>*/}
                            {/*</a>*/}
                            {/*<ul className="sub">*/}
                                {/*<li><a href="morris.html">Morris</a></li>*/}
                                {/*<li><a href="chartjs.html">Chartjs</a></li>*/}
                            {/*</ul>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </aside>
        );
    }
}

export default Aside;