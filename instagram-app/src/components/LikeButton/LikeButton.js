import React, { Component } from "react";
import like from "../img/like.png";
import comment from "../img/comment.png";
import PropTypes from "prop-types";

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
      <div className="like-comment-section">
        <div className="like-comment-icons">
          <img
            onClick={this.toggleLike}
            className="like-icon"
            src={like}
            alt="like icon"
          />
          <img className="comment-icon" src={comment} alt="comment icon" />
        </div>
        <p className="total-likes">{this.state.likes} likes</p>
      </div>
    );
  }
}

export default LikeButton;
