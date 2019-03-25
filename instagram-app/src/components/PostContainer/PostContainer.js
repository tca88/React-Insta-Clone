import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';

const PostContainer = props => {
    
   
    return (
        <>
        <div className="username-container">
            <img className="username-thumbnail" src={props.fullInstagramData.thumbnailUrl} alt="thumbnail of user" />
            <p className="username-text">
            {props.fullInstagramData.username}
            </p>
        </div>
        <section>
            <img className="post-image" src={props.fullInstagramData.imageUrl} alt="post" />
        </section>
        {props.fullInstagramData.comments.map((comment, id) => (
        <CommentSection key={id} commentData={comment} />
    ))}
        </>
    )
}

export default PostContainer;