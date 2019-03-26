import React, { Component } from "react";
import "./CommentSection.css";
import PropTypes from "prop-types";

class CommentSection extends Component {
  state = {
    commentsArray: []
  };

  componentDidMount() {
    console.log("CDM running");
    this.setState({
      commentsArray: this.props.commentsArray
    });
  }

  handleChange = event => {
    this.setState({
      newComment: {
        username: "Trish",
        [event.target.name]: event.target.value
      }
    });
  };

  addNewComment = event => {
    event.preventDefault();
    this.setState({
      commentsArray: [...this.state.commentsArray, this.state.newComment]
    });
  };

  render() {
    return (
      <div>
        {this.state.commentsArray.map((comment, index) => (
          <div key={index} className="comment-section">
            <p className="comment-text">
              <span className="comment-username">{comment.username}</span>{" "}
              {comment.text}
            </p>
          </div>
        ))}
        <section>
          <form onSubmit={this.addNewComment}>
            <input
              type="text"
              id="text"
              name="text"
              onChange={this.handleChange}
            />
            <button>Submit</button>
          </form>
        </section>
      </div>
    );
  }
}

CommentSection.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
};

export default CommentSection;
