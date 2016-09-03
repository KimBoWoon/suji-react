/**
 * Created by secret on 8/24/16.
 */


import React, {Component} from 'react';

class Aside extends Component {
    constructor(props){
        super(props);

        this.state = {
            openSubmenuFlag: false,
            openSubmenuToggle: "dcjq-parent",
            displayToggle: "none"
        };
    }

    showSubmenu() {
        this.state.openSubmenuFlag = !this.state.openSubmenuFlag;

        if (this.state.openSubmenuFlag) {
            this.state.openSubmenuToggle = "dcjq-parent active";
            this.state.displayToggle = "block";
        }
        else {
            this.state.openSubmenuToggle = "dcjq-parent";
            this.state.displayToggle = "none";
        }

        this.setState({
            openSubmenuToggle: this.state.openSubmenuToggle
        });
    }

    render() {
        return (
            <aside>
                <div id="sidebar" className="nav-collapse ">
                    <ul className="sidebar-menu" id="nav-accordion">
                        <p className="centered"><a href="profile.html"><img src="assets/img/ui-sam.jpg"
                                                                            className="img-circle" width="60"
                                                                            role="presentation"/></a></p>
                        <h5 className="centered">Marcel Newman</h5>
                        <li className="mt">
                            <a className="active" href="index.html">
                                <i className="fa fa-dashboard"/>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li className="sub-menu">
                            <a href="javascript:;" className={this.state.openSubmenuToggle} onClick={this.showSubmenu.bind(this)}>
                                <i className="fa fa-desktop"/>
                                <span>UI Elements</span>
                            </a>
                            <ul className="sub" style={{overflow: "hidden", display: this.state.displayToggle}}>
                                <li><a href="general.html">General</a></li>
                                <li><a href="buttons.html">Buttons</a></li>
                                <li><a href="panels.html">Panels</a></li>
                            </ul>
                        </li>
                        <li className="sub-menu">
                            <a href="javascript:;">
                                <i className="fa fa-cogs"/>
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
                                <i className="fa fa-book"/>
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
                                <i className="fa fa-tasks"/>
                                <span>Forms</span>
                            </a>
                            <ul className="sub">
                                <li><a href="form_component.html">Form Components</a></li>
                            </ul>
                        </li>
                        <li className="sub-menu">
                            <a href="javascript:;">
                                <i className="fa fa-th"/>
                                <span>Data Tables</span>
                            </a>
                            <ul className="sub">
                                <li><a href="basic_table.html">Basic Table</a></li>
                                <li><a href="responsive_table.html">Responsive Table</a></li>
                            </ul>
                        </li>
                        <li className="sub-menu">
                            <a href="javascript:;">
                                <i className=" fa fa-bar-chart-o"/>
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