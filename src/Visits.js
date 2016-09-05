/**
 * Created by BoWoon on 2016-08-25.
 */

import React, {Component} from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

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
                        <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip" placement="top">8.500</Tooltip>}>
                            <div className="value tooltips" style={{height: 85 + "%"}}/>
                        </OverlayTrigger>
                    </div>
                    <div className="bar ">
                        <div className="title">FEB</div>
                        <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip" placement="top">5.000</Tooltip>}>
                            <div className="value tooltips" style={{height: 50 + "%"}}/>
                        </OverlayTrigger>
                    </div>
                    <div className="bar ">
                        <div className="title">MAR</div>
                        <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip" placement="top">6.000</Tooltip>}>
                            <div className="value tooltips" style={{height: 60 + "%"}}/>
                        </OverlayTrigger>
                    </div>
                    <div className="bar ">
                        <div className="title">APR</div>
                        <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip" placement="top">4.500</Tooltip>}>
                            <div className="value tooltips" style={{height: 45 + "%"}}/>
                        </OverlayTrigger>
                    </div>
                    <div className="bar">
                        <div className="title">MAY</div>
                        <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip" placement="top">3.200</Tooltip>}>
                            <div className="value tooltips" style={{height: 32 + "%"}}/>
                        </OverlayTrigger>
                    </div>
                    <div className="bar ">
                        <div className="title">JUN</div>
                        <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip" placement="top">6.200</Tooltip>}>
                            <div className="value tooltips" style={{height: 62 + "%"}}/>
                        </OverlayTrigger>
                    </div>
                    <div className="bar">
                        <div className="title">JUL</div>
                        <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip" placement="top">7.500</Tooltip>}>
                            <div className="value tooltips" style={{height: 75 + "%"}}/>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
        );
    }
}

export default Visits;