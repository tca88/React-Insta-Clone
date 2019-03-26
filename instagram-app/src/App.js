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
        username: "Trish"
      });
    }, 100);
  }

  onSearchSubmit = event => {
    event.preventDefault();
    // const filterPosts = this.state.posts.includes(this.state.usernameText);

    this.setState({
      posts: this.state.posts.filter(
        post => post.username === this.state.usernameText
      )
    });
  };

  onSearchChange = event => {
    this.setState({
      usernameText: event.target.value
    });
  };

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('CDU runnings');
  //   if (prevState.doggos !== this.state.doggos) {
  //     if (this.state.doggoText === 'chihuahua') {
  //       fetch('https://dog.ceo/api/breed/husky/images')
  //         .then(res => res.json())
  //         .then(dogs =>
  //           this.setState({ doggos: dogs.message, doggoText: 'husky' })
  //         )
  //         .catch(err => console.log('noooo'));
  //     }
  //   }
  // }

  render() {
    if (this.state.posts.length === 0) {
      return <Loader type="Puff" color="#00BFFF" height="100" width="100" />;
    }
    return (
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
    );
  }
}
export default App;
