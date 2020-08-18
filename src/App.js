import React, {Component} from 'react';
import './App.css';
import Header from "./Components/Header";
import MemeGenerator from "./Components/MemeGenerator";
import './style.css';

class App extends Component {

    constructor() {
        super();
        this.state = {}

    }

    render() {


        return (
            <div>
                <Header/>
                <MemeGenerator/>
            </div>
        );
    }

}

export default App;
