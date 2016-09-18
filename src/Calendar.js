/**
 * Created by secret on 9/2/16.
 */

import React, {Component} from 'react'

class Calendar extends Component {
    render() {
        return (
            <div id="calendar" className="mb">
                <div className="panel green-panel no-margin">
                    <div className="panel-body">
                        <div id="date-popover" className="popover top"
                             style={{marginLeft: 33, marginTop: -50, width: 175}}>
                            <div className="arrow"></div>
                            <h3 className="popover-title"/>
                            <div id="date-popover-content" className="popover-content"></div>
                        </div>
                        <div ref="my-calendar"/>
                        <div ref="calender"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calendar