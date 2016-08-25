import React, {Component} from 'react';
import TopMenu from './TopMenu'
import Aside from './Aside'
import MiddleMenu from './MiddleMenu'

class App extends Component {
    render() {
        return (
            <div className="App">
                <TopMenu/>
                <Aside/>
                <MiddleMenu/>
            </div>
        );
    }
}

export default App;
