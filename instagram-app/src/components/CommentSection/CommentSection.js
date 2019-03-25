import React from 'react';
import './CommentSection.css';
import PropTypes from "prop-types";


const CommentSection = props => {
    return (
        <div className="comment-section">
            <p className="comment-text"><span className="comment-username">{props.commentData.username}</span> {props.commentData.text}</p>
        </div>
       
    )
}

CommentSection.propTypes = {
    commentData: PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string,
        })
}

export default CommentSection;