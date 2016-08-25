/**
 * Created by BoWoon on 2016-08-25.
 */

import React, {Component} from 'react'

class TeamMembers extends Component {
    render() {
        return (
            <div>
                <h3>TEAM MEMBERS</h3>
                <div className="desc">
                    <div className="thumb">
                        <img className="img-circle" src="assets/img/ui-divya.jpg" width="35px" height="35px"
                             align=""/>
                    </div>
                    <div class="details">
                        <p><a href="#">DIVYA MANIAN</a><br/>
                            <muted>Available</muted>
                        </p>
                    </div>
                </div>
                <div className="desc">
                    <div className="thumb">
                        <img className="img-circle" src="assets/img/ui-sherman.jpg" width="35px"
                             height="35px"
                             align=""/>
                    </div>
                    <div className="details">
                        <p><a href="#">DJ SHERMAN</a><br/>
                            <muted>I am Busy</muted>
                        </p>
                    </div>
                </div>
                <div className="desc">
                    <div className="thumb">
                        <img className="img-circle" src="assets/img/ui-danro.jpg" width="35px" height="35px"
                             align=""/>
                    </div>
                    <div className="details">
                        <p><a href="#">DAN ROGERS</a><br/>
                            <muted>Available</muted>
                        </p>
                    </div>
                </div>
                <div className="desc">
                    <div className="thumb">
                        <img className="img-circle" src="assets/img/ui-zac.jpg" width="35px" height="35px"
                             align=""/>
                    </div>
                    <div className="details">
                        <p><a href="#">Zac Sniders</a><br/>
                            <muted>Available</muted>
                        </p>
                    </div>
                </div>
                <div className="desc">
                    <div className="thumb">
                        <img className="img-circle" src="assets/img/ui-sam.jpg" width="35px" height="35px"
                             align=""/>
                    </div>
                    <div className="details">
                        <p><a href="#">Marcel Newman</a><br/>
                            <muted>Available</muted>
                        </p>
                    </div>
                </div>
                <div id="calendar" className="mb">
                    <div className="panel green-panel no-margin">
                        <div className="panel-body">
                            <div id="date-popover" className="popover top"
                                 style={{marginLeft: 33, marginTop: -50, width: 175}}>
                                <div className="arrow"></div>
                                <h3 className="popover-title"></h3>
                                <div id="date-popover-content" className="popover-content"></div>
                            </div>
                            <div id="my-calendar"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TeamMembers