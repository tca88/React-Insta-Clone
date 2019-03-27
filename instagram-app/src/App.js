import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data.js";
import PostContainer from "./components/PostContainer/PostContainer.js";
import SearchBar from "./components/SearchBar/SearchBar.js";
import Loader from "react-loader-spinner";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      username: ""
    };
  }

  componentDidMount() {
    console.log("CDM running");
    setTimeout(() => {
      this.setState({
        posts: dummyData,
        username: "Trish",
        postCache: []
      });
    }, 1000);
  }

  onSearchSubmit = event => {
    event.preventDefault();
    const filter = {};
    // Create a new filter object, and If cache exists, create a new array from the cached posts that contains the the filtered posts, and store it on the filter object
    if (this.state.postCache.length) {
      filter.filteredPosts = this.state.postCache.filter(
        post => post.username === this.state.usernameText
      );
      // If cache does not exist (means onSearchSubmit() was never run) create a new array from this.state.posts that contains the filtered posts, and store it on the filter object
    } else {
      filter.filteredPosts = this.state.posts.filter(
        post => post.username === this.state.usernameText
      );
    }

    this.setState({
      postCache: [...this.state.posts],
      posts: filter.filteredPosts
    });
  };

  onSearchChange = event => {
    event.preventDefault();
    this.setState({
      usernameText: event.target.value
    });
  };

  render() {
    if (this.state.posts.length === 0) {
      return (
        <div className="loader">
          <Loader type="ThreeDots" color="#00BFFF" height="300" width="300" />
        </div>
      );
    }
    return (
      <div className="container">
        <div className="App">
          <SearchBar
            posts={this.state.posts}
            onSearchSubmit={this.onSearchSubmit}
            onSearchChange={this.onSearchChange}
          />
          {this.state.posts.map((post, index) => (
            <PostContainer key={index} index={index} post={post} />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
