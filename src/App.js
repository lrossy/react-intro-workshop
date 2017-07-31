import React, { Component } from 'react';
import './App.css';
import ImageCaption from './ImageCaption';
import Layout from './Layout';
import GuessTheNumber from './GuessTheNumber';
import YouClicked from './YouClicked';
import CharacterCounter from './CharacterCounter';
import CharacterLimit from './CharacterLimit';

class App extends Component {
    renderImage(img){
        return (
            <ImageCaption key={img.id} source={img.source} text={img.text}/>
        );
    }

    render() {
        return (
          <div className="App">
              <h2>Testing Layout</h2>
              <Layout>
                  <GuessTheNumber numberToGuess={20}></GuessTheNumber>
                  <YouClicked></YouClicked>
                  <CharacterCounter></CharacterCounter>
                  <CharacterLimit limit={140}></CharacterLimit>
              </Layout>
          </div>
        );
  }
}

export default App;
