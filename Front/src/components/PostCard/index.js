import ReactAudioPlayer from 'react-audio-player';

import React from 'react';

import './posts.scss';

const PostCard = ({ data }) =>
/*   console.log(data);
 */ (
   <div>
     <h2>Titre</h2>
     <ReactAudioPlayer
        /* src={url} */
       controls
       preload="auto"
     />
   </div>
  );
export default PostCard;
