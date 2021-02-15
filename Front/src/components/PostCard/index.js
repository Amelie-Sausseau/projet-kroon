import ReactAudioPlayer from 'react-audio-player';

import React from 'react';

import './posts.scss';

const PostCard = () =>
/*   console.log(data);
 */ (
   <div>
     <h1>Titre</h1>
     <ReactAudioPlayer
        /* src={url} */
       controls
       preload="auto"
     />
   </div>
  );
export default PostCard;
