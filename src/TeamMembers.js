/**
 * Created by BoWoon on 2016-08-25.
 */

import React, {Component} from 'react'
import Calendar from './Calendar'

class TeamMembers extends Component {
    render() {
        return (
            <div>
                <h3>TEAM MEMBERS</h3>
                <div className="desc">
                    <div className="thumb">
                        <img className="img-circle" src="assets/img/ui-divya.jpg" width="35px" height="35px"/>
                    </div>
                    <div className="details">
                        <p><a href="#">DIVYA MANIAN</a><br/>
                            <muted>Available</muted>
                        </p>
                    </div>
                </div>
                <div className="desc">
                    <div className="thumb">
                        <img className="img-circle" src="assets/img/ui-sherman.jpg" width="35px" height="35px"/>
                    </div>
                    <div className="details">
                        <p><a href="#">DJ SHERMAN</a><br/>
                            <muted>I am Busy</muted>
                        </p>
                    </div>
                </div>
                <div className="desc">
                    <div className="thumb">
                        <img className="img-circle" src="assets/img/ui-danro.jpg" width="35px" height="35px"/>
                    </div>
                    <div className="details">
                        <p><a href="#">DAN ROGERS</a><br/>
                            <muted>Available</muted>
                        </p>
                    </div>
                </div>
                <div className="desc">
                    <div className="thumb">
                        <img className="img-circle" src="assets/img/ui-zac.jpg" width="35px" height="35px"/>
                    </div>
                    <div className="details">
                        <p><a href="#">Zac Sniders</a><br/>
                            <muted>Available</muted>
                        </p>
                    </div>
                </div>
                <div className="desc">
                    <div className="thumb">
                        <img className="img-circle" src="assets/img/ui-sam.jpg" width="35px" height="35px"/>
                    </div>
                    <div className="details">
                        <p><a href="#">Marcel Newman</a><br/>
                            <muted>Available</muted>
                        </p>
                    </div>
                </div>
                <Calendar/>
            </div>
        );
    }
}

export default TeamMembers