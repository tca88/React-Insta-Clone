import React from 'react';


const CommentSection = props => {
    return (
        <div className="comment-section">
            <p>{props.commentData.username}</p>
            <p>{props.commentData.text}</p>
        </div>
    )
}

export default CommentSection;