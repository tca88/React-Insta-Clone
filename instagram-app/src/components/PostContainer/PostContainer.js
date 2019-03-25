import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import like from '../img/like.png';
import comment from '../img/comment.png';
import './PostContainer.css';
import PropTypes from "prop-types";

const PostContainer = props => {
    
   
    return (
        <div className="post-container">
            <div className="username-container">
                <img className="username-thumbnail" src={props.fullInstagramData.thumbnailUrl} alt="thumbnail of user" />
                <p className="username-text">
                {props.fullInstagramData.username}
                </p>
            </div>
            <div>
                <img className="post-image" src={props.fullInstagramData.imageUrl} alt="post" />
            </div>
            <div className="like-comment-section">
                <div className="like-comment-icons">
                    <img className="like-icon" src={like} alt="like icon" />
                    <img className="comment-icon" src={comment} alt="comment icon" />
                </div>
                <p className="total-likes">{props.fullInstagramData.likes} likes</p>
            </div>
            <section>
                {props.fullInstagramData.comments.map((comment, id) => (
                <CommentSection key={id} commentData={comment} />
                ))}
            </section>
            <div className="timestamp">
               <p>{props.fullInstagramData.timestamp}</p>
            </div>
        </div>
    )
}

PostContainer.propTypes = {
    instagramData: PropTypes.arrayOf(
        PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(
            PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string,
            name: PropTypes.string,
            })
        )
        })
        )
}

export default PostContainer;