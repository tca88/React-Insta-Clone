import React from 'react';
import './CommentSection.css';


const CommentSection = props => {
    return (
        <div className="comment-section">
            <p className="comment-usernmae">{props.commentData.username}</p>
            <p className="comment-text">{props.commentData.text}</p>
        </div>
    )
}

export default CommentSection;