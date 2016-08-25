/**
 * Created by BoWoon on 2016-08-25.
 */

import React, {Component} from 'react';

class Visits extends Component {
    render() {
        return (
            <div className="row mt">
                <div className="border-head">
                    <h3>VISITS</h3>
                </div>
                <div className="custom-bar-chart">
                    <ul className="y-axis">
                        <li><span>10.000</span></li>
                        <li><span>8.000</span></li>
                        <li><span>6.000</span></li>
                        <li><span>4.000</span></li>
                        <li><span>2.000</span></li>
                        <li><span>0</span></li>
                    </ul>
                    <div className="bar">
                        <div className="title">JAN</div>
                        <div className="value tooltips" data-original-title="8.500"
                             data-toggle="tooltip"
                             data-placement="top">85%
                        </div>
                    </div>
                    <div className="bar ">
                        <div className="title">FEB</div>
                        <div className="value tooltips" data-original-title="5.000"
                             data-toggle="tooltip"
                             data-placement="top">50%
                        </div>
                    </div>
                    <div className="bar ">
                        <div className="title">MAR</div>
                        <div className="value tooltips" data-original-title="6.000"
                             data-toggle="tooltip"
                             data-placement="top">60%
                        </div>
                    </div>
                    <div className="bar ">
                        <div className="title">APR</div>
                        <div className="value tooltips" data-original-title="4.500"
                             data-toggle="tooltip"
                             data-placement="top">45%
                        </div>
                    </div>
                    <div className="bar">
                        <div className="title">MAY</div>
                        <div className="value tooltips" data-original-title="3.200"
                             data-toggle="tooltip"
                             data-placement="top">32%
                        </div>
                    </div>
                    <div className="bar ">
                        <div className="title">JUN</div>
                        <div className="value tooltips" data-original-title="6.200"
                             data-toggle="tooltip"
                             data-placement="top">62%
                        </div>
                    </div>
                    <div className="bar">
                        <div className="title">JUL</div>
                        <div className="value tooltips" data-original-title="7.500"
                             data-toggle="tooltip"
                             data-placement="top">75%
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Visits;