import React from 'react';

// import Message from 'src/containers/Messages/Message';
import './comments.scss';
import AvatarComment from '../../../utils/avatarComment';


const Comments = ({body, title}) => {
console.log(body, title)
  return (
    <>
    <div>{title}</div>
  <div className="commentaire">

 <AvatarComment className="avatarComment"/>
    {/* <div className="message__username">pseudo</div> */}
    <div className="message__content">{body}</div>
  </div>
  </>
)};

export default Comments;