import React from 'react';
import './CommentSection.css';


const CommentSection = props => {
    return (
        <div className="comment-section">
            <p className="comment-text"><span className="comment-username">{props.commentData.username}</span> {props.commentData.text}</p>
        </div>
    )
}

export default CommentSection;