/**
 * Created by secret on 8/24/16.
 */


import React, {Component} from 'react';
import Information from './Information'
import Visits from './Visits'
import Content from './Content'
import Notifications from './Notifications'
import TeamMembers from './TeamMembers'

class MiddleMenu extends Component {
    render() {
        return (
            <section id="main-content">
                <section className="wrapper">
                    <div className="row">
                        <div className="col-lg-9 main-chart">
                            <Information/>
                            <Content/>
                            <Visits/>
                        </div>
                        <div className="col-lg-3 ds">
                            <Notifications/>
                            <TeamMembers/>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

export default MiddleMenu;