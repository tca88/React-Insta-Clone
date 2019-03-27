import React, { Component } from "react";
import moment from "moment";
import CommentSection from "../CommentSection/CommentSection.js";
import LikeButton from "../LikeButton/LikeButton.js";
import "./PostContainer.css";
import PropTypes from "prop-types";

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
      <div className="post-container">
        <div className="username-container">
          <img
            className="username-thumbnail"
            src={this.props.post.thumbnailUrl}
            alt="thumbnail of user"
          />
          <p className="username-text">{this.props.post.username}</p>
        </div>
        <div>
          <img
            className="post-image"
            src={this.props.post.imageUrl}
            alt="post"
          />
        </div>

        <LikeButton likes={this.props.post.likes} />

        <section>
          <CommentSection
            key={this.props.post.index}
            index={this.props.post.index}
            commentsArray={this.props.post.comments}
          />
        </section>
        <div className="timestamp">
          <p>{moment(this.state.newDate, "MMM Do YYYY").fromNow()}</p>
        </div>
      </div>
    );
  }
}

// PostContainer.propTypes = {
//   post: PropTypes.shape({
//     username: PropTypes.string.isRequired,
//     thumbnailUrl: PropTypes.string.isRequired,
//     imageUrl: PropTypes.string.isRequired,
//     likes: PropTypes.number,
//     timestamp: PropTypes.string,
//     comments: PropTypes.arrayOf(
//       PropTypes.shape({
//         username: PropTypes.string,
//         text: PropTypes.string
//       })
//     )
//   })
// };

export default PostContainer;
