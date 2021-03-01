import React from 'react';

// import Message from 'src/containers/Messages/Message';
import './comments.scss';
import AvatarComment from '../../../utils/avatarComment';


const Comments = ({ comments }) => {


  console.log(comments);
  return (
    <>
    {/* {comments ? ( */}
    <div className="commentaires">
      {/* <div className="message__username">{post.user.slug}</div> */}

      {
        comments.map((comment) => (
          <div className="comment__content">{comment.body}</div>
        ))

      }
    </div>
   {/*  ) : <div>chargement</div>} */}
    </>
  );
};

export default Comments;