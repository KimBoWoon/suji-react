/**
 * Created by secret on 8/24/16.
 */


import React, {Component} from 'react';

class Aside extends Component {
    render() {
        return (
            <aside>
                <div id="sidebar" className="nav-collapse ">
                    <ul className="sidebar-menu" id="nav-accordion">
                        <p className="centered"><a href="profile.html"><img src="assets/img/ui-sam.jpg"
                                                                            className="img-circle" width="60"/></a></p>
                        <h5 className="centered">Marcel Newman</h5>
                        <li className="mt">
                            <a className="active" href="index.html">
                                <i className="fa fa-dashboard"></i>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li className="sub-menu">
                            <a href="javascript:;">
                                <i className="fa fa-desktop"></i>
                                <span>UI Elements</span>
                            </a>
                            <ul className="sub">
                                <li><a href="general.html">General</a></li>
                                <li><a href="buttons.html">Buttons</a></li>
                                <li><a href="panels.html">Panels</a></li>
                            </ul>
                        </li>
                        <li className="sub-menu">
                            <a href="javascript:;">
                                <i className="fa fa-cogs"></i>
                                <span>Components</span>
                            </a>
                            <ul className="sub">
                                <li><a href="calendar.html">Calendar</a></li>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li><a href="todo_list.html">Todo List</a></li>
                            </ul>
                        </li>
                        <li className="sub-menu">
                            <a href="javascript:;">
                                <i className="fa fa-book"></i>
                                <span>Extra Pages</span>
                            </a>
                            <ul className="sub">
                                <li><a href="blank.html">Blank Page</a></li>
                                <li><a href="login.html">Login</a></li>
                                <li><a href="lock_screen.html">Lock Screen</a></li>
                            </ul>
                        </li>
                        <li className="sub-menu">
                            <a href="javascript:;">
                                <i className="fa fa-tasks"></i>
                                <span>Forms</span>
                            </a>
                            <ul className="sub">
                                <li><a href="form_component.html">Form Components</a></li>
                            </ul>
                        </li>
                        <li className="sub-menu">
                            <a href="javascript:;">
                                <i className="fa fa-th"></i>
                                <span>Data Tables</span>
                            </a>
                            <ul className="sub">
                                <li><a href="basic_table.html">Basic Table</a></li>
                                <li><a href="responsive_table.html">Responsive Table</a></li>
                            </ul>
                        </li>
                        <li className="sub-menu">
                            <a href="javascript:;">
                                <i className=" fa fa-bar-chart-o"></i>
                                <span>Charts</span>
                            </a>
                            <ul className="sub">
                                <li><a href="morris.html">Morris</a></li>
                                <li><a href="chartjs.html">Chartjs</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </aside>
        );
    }
}

export default Aside;