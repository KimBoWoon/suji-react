/**
 * Created by secret on 8/24/16.
 */


import React, {Component} from 'react';

class Content extends Component {
    render() {
        return (
            <section id="main-content">
                <section className="wrapper">
                    <div className="row">
                        <div className="col-lg-9 main-chart">
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
                                            <div className="sparkline" data-type="line" data-resize="true" data-height="75"
                                                 data-width="90%" data-line-width="1" data-line-color="#fff"
                                                 data-spot-color="#fff" data-fill-color=""
                                                 data-highlight-line-color="#fff" data-spot-radius="4"
                                                 data-data="[200,135,667,333,526,996,564,123,890,464,655]"></div>
                                        </div>
                                        <p className="mt"><b>$ 17,980</b><br/>Month Income</p>
                                    </div>
                                </div>

                            </div>
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
                                        <div className="value tooltips" data-original-title="8.500" data-toggle="tooltip"
                                             data-placement="top">85%
                                        </div>
                                    </div>
                                    <div className="bar ">
                                        <div className="title">FEB</div>
                                        <div className="value tooltips" data-original-title="5.000" data-toggle="tooltip"
                                             data-placement="top">50%
                                        </div>
                                    </div>
                                    <div className="bar ">
                                        <div className="title">MAR</div>
                                        <div className="value tooltips" data-original-title="6.000" data-toggle="tooltip"
                                             data-placement="top">60%
                                        </div>
                                    </div>
                                    <div className="bar ">
                                        <div className="title">APR</div>
                                        <div className="value tooltips" data-original-title="4.500" data-toggle="tooltip"
                                             data-placement="top">45%
                                        </div>
                                    </div>
                                    <div className="bar">
                                        <div className="title">MAY</div>
                                        <div className="value tooltips" data-original-title="3.200" data-toggle="tooltip"
                                             data-placement="top">32%
                                        </div>
                                    </div>
                                    <div className="bar ">
                                        <div className="title">JUN</div>
                                        <div className="value tooltips" data-original-title="6.200" data-toggle="tooltip"
                                             data-placement="top">62%
                                        </div>
                                    </div>
                                    <div className="bar">
                                        <div className="title">JUL</div>
                                        <div className="value tooltips" data-original-title="7.500" data-toggle="tooltip"
                                             data-placement="top">75%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 ds">
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
                                    <img className="img-circle" src="assets/img/ui-sherman.jpg" width="35px" height="35px"
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
                    </div>
                </section>
            </section>
            // <footer className="site-footer">
            //     <div className="text-center">
            //         2014 - Alvarez.is
            //         <a href="index.html#" className="go-top">
            //             <i class="fa fa-angle-up"></i>
            //         </a>
            //     </div>
            // </footer>
            // </section>
        );
    }
}

export default Content;