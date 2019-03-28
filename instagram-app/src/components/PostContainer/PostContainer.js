import React, { Component } from "react";
import moment from "moment";
import CommentSection from "../CommentSection/CommentSection.js";
import LikeButton from "../LikeButton/LikeButton.js";
import styled, { css } from "styled-components";
import "./PostContainer.css";
import PropTypes from "prop-types";
import { Button, UsernameText, Text } from "../ReusableStyles/ReusableStyles";

const IndivPosts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 642px;
  border: 1.5px solid #e7e7e7;
  margin-top: 2rem;
  box-shadow: 0 0 8px 2px rgba(138, 138, 138, 0.4);
`;

const UsernameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
`;

const UsernameThumbnail = styled.img`
  border-radius: 50%;
  width: 8%;
  height: 8%;
  margin-right: 1rem;
`;

const PostImage = styled.img`
  width: 100%;
`;

class PostContainer extends Component {
  state = {
    commentsArray: [],
    newDate: []
  };

  componentDidMount() {
    // console.log("CDM running");
    this.setState({
      commentsArray: this.props.post.comments,
      newDate: this.props.post.timestamp.split(",")[0]
    });
  }

  render() {
    // console.log(this.props.post.timestamp.split(",")[0]);
    // console.log(this.state.date);
    return (
      <IndivPosts>
        <UsernameContainer>
          <UsernameThumbnail
            src={this.props.post.thumbnailUrl}
            alt="thumbnail of user"
          />
          <UsernameText>{this.props.post.username}</UsernameText>
        </UsernameContainer>
        <div>
          <PostImage src={this.props.post.imageUrl} alt="post" />
        </div>

        <LikeButton likes={this.props.post.likes} />

        <section>
          <CommentSection
            key={this.props.post.index}
            index={this.props.post.index}
            commentsArray={this.props.post.comments}
          />
        </section>
        <div>
          <Text timestamp>
            {moment(this.state.newDate, "MMM Do YYYY").fromNow()}
          </Text>
        </div>
      </IndivPosts>
    );
  }
}

PostContainer.propTypes = {
  post: PropTypes.shape({
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

export default PostContainer;
