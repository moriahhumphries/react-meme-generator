import React, {Component} from 'react';
import './App.css';
import Header from "./Components/Header";
import MemeGenerator from "./Components/MemeGenerator";

class App extends Component {

    constructor() {
        super();
        this.state = {}

    }

    render() {


        return (
            <div>
                <Header />
                <h1>Meme Generator</h1>
            </div>
        );
    }

}

export default App;
