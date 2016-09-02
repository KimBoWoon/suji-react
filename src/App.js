import React, {Component} from 'react';
import TopMenu from './TopMenu'
import Aside from './Aside'
import MiddleMenu from './MiddleMenu'
import Bottom from './Bottom'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sidebarTag: ""
        };
    }

    render() {
        return (
            <div className="App">
                <section id="container" className={this.state.sidebarTag}>
                    <TopMenu/>
                    <Aside/>
                    <MiddleMenu/>
                    <Bottom/>
                </section>
            </div>
        );
    }
}

export default App;
