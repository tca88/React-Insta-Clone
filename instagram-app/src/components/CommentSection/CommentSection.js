import React, { Component } from "react";
import styled, { css } from "styled-components";
import {
  Button,
  Text,
  Form,
  InputField
} from "../ReusableStyles/ReusableStyles";
import PropTypes from "prop-types";

const CommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  width: 100%;
  padding-left: 1rem;
`;

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
        username: localStorage.getItem("username"),
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
          <CommentContainer key={index}>
            <Text>
              <Text username>{comment.username}</Text> {comment.text}
            </Text>
          </CommentContainer>
        ))}
        <section>
          <Form commentForm onSubmit={this.addNewComment}>
            <InputField
              comment
              type="text"
              id="text"
              name="text"
              placeholder="Add a comment..."
              onChange={this.handleChange}
            />
            <Button post>Post</Button>
          </Form>
        </section>
      </div>
    );
  }
}

CommentSection.propTypes = {
  commentsArray: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default CommentSection;
