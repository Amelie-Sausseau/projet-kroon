import React from 'react';

import './comments.scss';


const Comments = ({ post }) => {

  return (
    <div className="commentaires">

      {
        post.comments.map((comment) => (
          <div className="comment__content" key={comment.id}>{comment.body}</div>
        ))

      }
    </div>
  );
};

export default Comments;

