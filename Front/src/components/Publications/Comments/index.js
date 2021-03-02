import React from 'react';
// import Message from 'src/containers/Messages/Message';
import './comments.scss';
import AvatarComment from '../../../utils/avatarComment';

// export const test = () => {
//   axios.post(`http://ec2-3-82-153-17.compute-1.amazonaws.com/api/v1/posts/${post.id}/comment`)
//     .then((response) => {
//       console.log('je passe dans le then');
//       console.log(response);
//     }).catch((error) => {
//       console.log('error');
//     });
// };

const Comments = ({ post }) => {
  console.log(post);
  console.log(post.id);

  return (
    <div className="commentaires">
      {/* <div className="message__username">{post.user.slug}</div> */}

      {
        post.comments.map((comment) => (
          <div className="comment__container">
            <div className="comment__content" key={comment.id}>{comment.body}<div className="comment__icons"><i className="lni lni-warning" /><i className="lni lni-thumbs-up" /></div></div>
          </div>
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
// </div><i className="lni lni-pencil">
