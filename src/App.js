import React, {Component} from 'react';
import TopMenu from './TopMenu'
import Aside from './Aside'
import Content from './Content'

class App extends Component {
    render() {
        return (
            <div className="App">
                <TopMenu/>
                <Aside/>
                <Content/>
            </div>
        );
    }
}

export default App;
