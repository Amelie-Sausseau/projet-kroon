import ReactAudioPlayer from 'react-audio-player';

import React from 'react';

import './posts.scss';


const Posts = ({data}) => {
console.log(data);
return(
    <div>
<h1>Titre</h1>
{/* <ReactAudioPlayer
        src={url}
        controls
        preload='auto'
      /> */}
<p>Desciprion</p>
  </div>
)};

export default Posts;