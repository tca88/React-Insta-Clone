import React, { Component } from "react";
import dummyData from "../../dummy-data.js";
import styled, { css } from "styled-components";
import PostContainer from "./PostContainer.js";
import SearchBar from "../SearchBar/SearchBar.js";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";
import { Button, UsernameText } from "../ReusableStyles/ReusableStyles";

const PostsContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  margin-top: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 8px 3px rgba(85, 85, 85, 0.6);
  background: white;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
`;

const InstagramApp = styled.div`
  margin: 0 auto;
  max-width: 642px;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const LoaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vh;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

class PostsPage extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    console.log("CDM running");
    setTimeout(() => {
      this.setState({
        posts: dummyData,
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

  logout = event => {
    localStorage.removeItem("username");
    document.location.reload();
  };

  render() {
    if (this.state.posts.length === 0) {
      return (
        <LoaderStyle>
          <Loader type="ThreeDots" color="white" height="200" width="200" />
        </LoaderStyle>
      );
    }
    return (
      <PostsContainer>
        <Button logout onClick={this.logout}>
          Logout
        </Button>
        <InstagramApp>
          <SearchBar
            posts={this.state.posts}
            onSearchSubmit={this.onSearchSubmit}
            onSearchChange={this.onSearchChange}
          />
          {this.state.posts.map((post, index) => (
            <PostContainer key={index} index={index} post={post} />
          ))}
        </InstagramApp>
      </PostsContainer>
    );
  }
}
PostsPage.propTypes = {
  posts: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
      })
    )
  })
};
export default PostsPage;
