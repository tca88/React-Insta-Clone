import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import like from '../img/like.png';
import comment from '../img/comment.png';
import './PostContainer.css';
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";


const PostContainer = props => {

    return (
        <div className="post-container">
            <div className="username-container">
                <img className="username-thumbnail" src={props.post.thumbnailUrl} alt="thumbnail of user" />
                <p className="username-text">
                {props.post.username}
                </p>
            </div>
            <div>
                <img className="post-image" src={props.post.imageUrl} alt="post" />
            </div>
            <div className="like-comment-section">
                <div className="like-comment-icons">
                    <img className="like-icon" src={like} alt="like icon" />
                    <img className="comment-icon" src={comment} alt="comment icon" />
                </div>
                <p className="total-likes">{props.post.likes} likes</p>
            </div>
            <section>
                {props.post.comments.map((comment, index) => (
                <CommentSection postId={props.postTimestamp} key={index} username={comment.username} text={comment.text} />
                ))}
            </section>
            <div className="timestamp">
               <p>{props.post.timestamp}</p>
            </div>
            <section>
                <form onSubmit={props.handleSubmit}>
                    <input type="text" id="comment" name="comment"/>
                    <input readOnly style={{display: 'none'}} value={props.post.timestamp} type="text" id="postTimestamp" name="postTimestamp"/>
                    <button>Submit</button>
                </form>
            </section>
        </div>
    )
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
            text: PropTypes.string,
            })
        )
        })
}

export default PostContainer;