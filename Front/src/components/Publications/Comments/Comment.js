import React from 'react';
import AvatarComment from '../../../utils/avatarComment';

const Comment = () => (
     
  <div className="commentaire">
 <AvatarComment className="avatarComment"/>
    {/* <div className="message__username">pseudo</div> */}
    <div className="message__content">le commentaire du man</div>
  </div>
);

export default Comment;
