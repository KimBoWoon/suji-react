/**
 * Created by BoWoon on 2016-08-25.
 */


import React, {Component} from 'react';

class Content extends Component {
    render() {
        return (
            <div>
                <div className="row mt">
                    <div className="col-md-4 col-sm-4 mb">
                        <div className="white-panel pn donut-chart">
                            <div className="white-header">
                                <h5>SERVER LOAD</h5>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-xs-6 goleft">
                                    <p><i className="fa fa-database"></i> 70%</p>
                                </div>
                            </div>
                            <canvas id="serverstatus01" height="120" width="120"></canvas>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 mb">
                        <div className="white-panel pn">
                            <div className="white-header">
                                <h5>TOP PRODUCT</h5>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-xs-6 goleft">
                                    <p><i className="fa fa-heart"></i> 122</p>
                                </div>
                                <div className="col-sm-6 col-xs-6"></div>
                            </div>
                            <div className="centered">
                                <img src="assets/img/product.png" width="120"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb">
                        <div className="white-panel pn">
                            <div className="white-header">
                                <h5>TOP USER</h5>
                            </div>
                            <p><img src="assets/img/ui-zac.jpg" className="img-circle" width="80"/></p>
                            <p><b>Zac Snider</b></p>
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="small mt">MEMBER SINCE</p>
                                    <p>2012</p>
                                </div>
                                <div className="col-md-6">
                                    <p className="small mt">TOTAL SPEND</p>
                                    <p>$ 47,60</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mb">
                        <div className="darkblue-panel pn">
                            <div className="darkblue-header">
                                <h5>DROPBOX STATICS</h5>
                            </div>
                            <canvas id="serverstatus02" height="120" width="120"></canvas>
                            <p>April 17, 2014</p>
                            <footer>
                                <div className="pull-left">
                                    <h5><i className="fa fa-hdd-o"></i> 17 GB</h5>
                                </div>
                                <div className="pull-right">
                                    <h5>60% Used</h5>
                                </div>
                            </footer>
                        </div>
                    </div>
                    <div className="col-md-4 mb">
                        <div className="instagram-panel pn">
                            <i className="fa fa-instagram fa-4x"></i>
                            <p>@THISISYOU<br/>
                                5 min. ago
                            </p>
                            <p><i className="fa fa-comment"></i> 18 | <i className="fa fa-heart"></i> 49</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 mb">
                        <div className="darkblue-panel pn">
                            <div className="darkblue-header">
                                <h5>REVENUE</h5>
                            </div>
                            <div className="chart mt">
                                <div className="sparkline" data-type="line" data-resize="true"
                                     data-height="75"
                                     data-width="90%" data-line-width="1" data-line-color="#fff"
                                     data-spot-color="#fff" data-fill-color=""
                                     data-highlight-line-color="#fff" data-spot-radius="4"
                                     data-data="[200,135,667,333,526,996,564,123,890,464,655]"></div>
                            </div>
                            <p className="mt"><b>$ 17,980</b><br/>Month Income</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;