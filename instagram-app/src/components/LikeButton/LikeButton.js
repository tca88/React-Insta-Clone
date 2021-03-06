import React, { Component } from "react";
import like from "../img/like.png";
import liked from "../img/liked.png";
import comment from "../img/comment.png";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import {
  Button,
  Text,
  Form,
  InputField
} from "../ReusableStyles/ReusableStyles";
import "./LikeButton.css";

const LikeCommentSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const LikeCommentIcons = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 1rem;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
`;
class LikeButton extends Component {
  state = {
    likes: 0
  };

  componentDidMount() {
    this.setState({
      likes: this.props.likes,
      liked: false
    });
  }

  toggleLike = event => {
    event.preventDefault();

    console.log(this.state.liked);
    this.setState({
      likes: this.state.likes + (this.state.liked ? -1 : 1),
      liked: !this.state.liked
    });
  };

  render() {
    return (
      <LikeCommentSection>
        <LikeCommentIcons>
          <img
            onClick={this.toggleLike}
            className={`like-icon${this.state.liked ? " gone" : ""}`}
            src={like}
            alt="like icon"
          />
          <img
            className={`liked-icon${this.state.liked ? " show" : ""}`}
            onClick={this.toggleLike}
            src={liked}
            alt="liked icon"
          />
          <img className="comment-icon" src={comment} alt="comment icon" />
        </LikeCommentIcons>
        <Text likes>{this.state.likes} likes</Text>
      </LikeCommentSection>
    );
  }
}

LikeButton.propTypes = {
  likes: PropTypes.number
};

export default LikeButton;
