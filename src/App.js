import React, {Component} from 'react';
import './App.css';
import Header from "./Components/Header";
import MemeGenerator from "./Components/MemeGenerator";
import './style.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []

        }
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes[0])
                this.setState({allMemeImgs: memes})
                })
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event) {
        const {name, value, type} = event.target;
        // Can wrap string in square brackets
            this.setState({[name]: value});
    }

    render() {


        return (
            <div>
                <Header/>
                <MemeGenerator/>
                <form className="meme-form">
                    <input type="text"
                           value={this.state.topText}
                           name="topText"
                           placeholder="Top Text"
                           onChange={this.handleChange}/>
                    <br/>
                    <input type="text"
                           value={this.state.bottomText}
                           name="bottomText"
                           placeholder="Bottom Text"
                           onChange={this.handleChange}/>

                    <button>Generate</button>
                </form>

                <div className="meme">
                    <img src={this.state.randomImage} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        );
    }

}

export default App;
