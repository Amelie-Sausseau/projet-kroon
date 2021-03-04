import React from 'react';

// import Message from 'src/containers/Messages/Message';
import './comments.scss';

const Comments = ({ comments }) => (
  <>
    {/* {comments ? ( */}
    <div className="commentaires">
      {/* <div className="message__username">{post.user.slug}</div> */}

      {
        comments.map((comment) => (
          <div>
            <div className="comment__icons">{comment.user.slug}</div>
            <div className="comment__content">{comment.body}</div>
          </div>
        ))

      }
    </div>
    {/*  ) : <div>chargement</div>} */}
  </>
);

export default Comments;
