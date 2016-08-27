/**
 * Created by BoWoon on 2016-08-25.
 */

import React, {Component} from 'react';

class Information extends Component {
    render() {
        return (
            <div className="row mtbox">
                <div className="col-md-2 col-sm-2 col-md-offset-1 box0">
                    <div className="box1">
                        <span className="li_heart"></span>
                        <h3>933</h3>
                    </div>
                    <p>933 People liked your page the last 24hs. Whoohoo!</p>
                </div>
                <div className="col-md-2 col-sm-2 box0">
                    <div className="box1">
                        <span className="li_cloud"></span>
                        <h3>+48</h3>
                    </div>
                    <p>48 New files were added in your cloud storage.</p>
                </div>
                <div className="col-md-2 col-sm-2 box0">
                    <div className="box1">
                        <span className="li_stack"></span>
                        <h3>23</h3>
                    </div>
                    <p>You have 23 unread messages in your inbox.</p>
                </div>
                <div className="col-md-2 col-sm-2 box0">
                    <div className="box1">
                        <span className="li_news"></span>
                        <h3>+10</h3>
                    </div>
                    <p>More than 10 news were added in your reader.</p>
                </div>
                <div className="col-md-2 col-sm-2 box0">
                    <div className="box1">
                        <span className="li_data"></span>
                        <h3>OK!</h3>
                    </div>
                    <p>Your server is working perfectly. Relax & enjoy.</p>
                </div>
            </div>
        );
    }
}

export default Information;