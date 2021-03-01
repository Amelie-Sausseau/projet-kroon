import React from 'react';

// import Message from 'src/containers/Messages/Message';
import './comments.scss';
import AvatarComment from '../../../utils/avatarComment';


const Comments = () => (
  <div className="commentaire">
 <AvatarComment className="avatarComment"/>
    {/* <div className="message__username">pseudo</div> */}
    <div className="message__content">le commentaire du man</div>
  </div>
);

export default Comments;