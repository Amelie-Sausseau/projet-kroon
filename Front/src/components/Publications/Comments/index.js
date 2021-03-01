import React from 'react';

// import Message from 'src/containers/Messages/Message';
import './comments.scss';
import AvatarComment from '../../../utils/avatarComment';

const Comments = ({ post }) => {
  console.log(post);
  return (
    <div className="commentaires">
      {/* <div className="message__username">{post.user.slug}</div> */}

      {
        post.comments.map((comment) => (
          <div className="comment__content">{comment.body}</div>
        ))

      }
    </div>
  );
};

export default Comments;

// const Posts = ({ posts }) => {
//   console.log(posts);

//   return (
//     <div>
//       {
//   posts.map((data) => (
//     <div>

//       <h1>{data.title}</h1>
//       <ReactAudioPlayer controls preload="auto" /* src={url} */ />
//       <p>{data.body}</p>
//     </div>

//   ))
// }
//     </div>
//   );
// };
