import React from 'react';
// import Message from 'src/containers/Messages/Message';
import './comments.scss';

const Comments = ({ post, clickReportPost }) => {
  function handleReportPost() {
    clickReportPost();
  }

  console.log(post)
  return (
    <div className="commentaires">

      {
        post.comments.map((comment) => (
          <div className="comment__container">
            <div className="comment__content" key={comment.id}>{comment.body}
              <div className="comment__icons"><i className="lni lni-warning" onClick={handleReportPost} /></div>
            </div>
          </div>
        ))

      }
    </div>
  );
};

export default Comments;
