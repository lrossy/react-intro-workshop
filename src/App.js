import React, { Component } from 'react';
import './App.css';
import ImageCaption from './ImageCaption';
import Layout from './Layout';
// import GuessTheNumber from './GuessTheNumber';
// import YouClicked from './YouClicked';
// import CharacterCounter from './CharacterCounter';
// import CharacterLimit from './CharacterLimit';
// import NumberGuessing from './NumberGuessing';
import GithubProfile from './GithubProfile';

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
                  <GithubProfile username="lrossy"></GithubProfile>
              </Layout>
          </div>
        );
  }
}

export default App;
