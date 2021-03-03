import React from 'react';
// import Message from 'src/containers/Messages/Message';
import './comments.scss';

const Comments = ({ post }) => (
  <div className="commentaires">

    {
        post.comments.map((comment) => (
          <div className="comment__container">
            <div className="comment__icons">{comment.user.slug}</div>
            <div className="comment__content" key={comment.id}>
              {comment.body}
            </div>
          </div>
        ))

      }
  </div>
);

export default Comments;
