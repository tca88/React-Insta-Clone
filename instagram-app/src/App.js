import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import Loader from "react-loader-spinner";


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      username: '',
    }
  }

  componentDidMount() {
    console.log("CDM running"); 
    setTimeout(() => {
      this.setState({
        posts: dummyData,
        username: 'Trish'
      });
    }, 2000);
  }

  handleSubmit = event => {
    event.preventDefault();
      const form = new FormData(event.target);

      const obj = {};
      for (let key of form.keys()) {         
        obj[key] = form.get(key);
      }
      let idx = this.state.posts.findIndex(post => post.timestamp === obj.postTimestamp);
      const newPosts = this.state.posts.slice() //copy the array
      newPosts[idx].comments = [...this.state.posts[idx].comments, {text: obj.comment, username: this.state.username}] //execute the manipulations
      this.setState({posts: newPosts}) //set the new state
    }

  render() {
    if(this.state.posts.length === 0) {
      return <Loader
      type="Puff"
      color="#00BFFF"
      height="100"    
      width="100"
   />;     
    }
    return (
      <div className="App">
          <SearchBar />
          {this.state.posts.map((post, index) => (
            <PostContainer 
            key={index}
            post={post}
            handleSubmit={this.handleSubmit}
            />
          ))}
      </div>
    );
  }
}
export default App;
