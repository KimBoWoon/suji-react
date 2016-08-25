/**
 * Created by BoWoon on 2016-08-25.
 */

import React, {Component} from 'react';

class Notifications extends Component {
    render() {
        return (
            <div>
                <h3>NOTIFICATIONS</h3>
                <div className="desc">
                    <div className="thumb">
                        <span className="badge bg-theme"><i className="fa fa-clock-o"></i></span>
                    </div>
                    <div className="details">
                        <p>
                            <muted>2 Minutes Ago</muted>
                            <br/>
                            <a href="#">James Brown</a> subscribed to your newsletter.<br/>
                        </p>
                    </div>
                </div>
                <div className="desc">
                    <div className="thumb">
                        <span className="badge bg-theme"><i className="fa fa-clock-o"></i></span>
                    </div>
                    <div className="details">
                        <p>
                            <muted>3 Hours Ago</muted>
                            <br/>
                            <a href="#">Diana Kennedy</a> purchased a year subscription.<br/>
                        </p>
                    </div>
                </div>
                <div className="desc">
                    <div className="thumb">
                        <span className="badge bg-theme"><i className="fa fa-clock-o"></i></span>
                    </div>
                    <div className="details">
                        <p>
                            <muted>7 Hours Ago</muted>
                            <br/>
                            <a href="#">Brandon Page</a> purchased a year subscription.<br/>
                        </p>
                    </div>
                </div>
                <div className="desc">
                    <div className="thumb">
                        <span className="badge bg-theme"><i className="fa fa-clock-o"></i></span>
                    </div>
                    <div className="details">
                        <p>
                            <muted>11 Hours Ago</muted>
                            <br/>
                            <a href="#">Mark Twain</a> commented your post.<br/>
                        </p>
                    </div>
                </div>
                <div className="desc">
                    <div className="thumb">
                        <span className="badge bg-theme"><i className="fa fa-clock-o"></i></span>
                    </div>
                    <div className="details">
                        <p>
                            <muted>18 Hours Ago</muted>
                            <br/>
                            <a href="#">Daniel Pratt</a> purchased a wallet in your store.<br/>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Notifications;