import React, {Component} from 'react';
import TopMenu from './TopMenu'
import Aside from './Aside'
import MiddleMenu from './MiddleMenu'

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            sidebarTag: "sidebar-closed"
        };

        this.sidebarToggle = this.sidebarToggle.bind(this);
    }

    sidebarToggle(flag){
        this.setState({
            sidebarTag: flag
        });

        console.log(flag);
    }

    render() {
        return (
            <div className="App">
                <section id="container" className={this.state.sidebarTag}>
                    <TopMenu/>
                    <Aside/>
                    <MiddleMenu/>
                </section>
            </div>
        );
    }
}

export default App;
