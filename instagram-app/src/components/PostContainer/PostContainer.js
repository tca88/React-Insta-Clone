import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import like from '../img/like.png';
import comment from '../img/comment.png';

const PostContainer = props => {
    
   
    return (
        <>
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
            <img className="like-icon" src={like} alt="like icon" />
            <img className="comment-icon" src={comment} alt="comment icon" />
        </div>
        {props.fullInstagramData.comments.map((comment, id) => (
        <CommentSection key={id} commentData={comment} />
    ))}
        </>
    )
}

export default PostContainer;