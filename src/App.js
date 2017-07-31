import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageCaption from './ImageCaption';

var imageList = [
    {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
    {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
    {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];

class App extends Component {
    renderImage(img){
        return (
            <ImageCaption id={img.id} source={img.source} text={img.text}/>
        );
    }

    render() {
        return (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
              <hr/>
              <h2>testing ImageCaption</h2>
              <div>
                  {imageList.map(this.renderImage)}
              </div>
              <hr/>

          </div>
        );
  }
}

export default App;
