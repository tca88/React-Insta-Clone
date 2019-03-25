import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      instagramData: dummyData,
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="post-container">
          {this.state.instagramData.map((data, id) => (
            <PostContainer key={id} fullInstagramData={data} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
