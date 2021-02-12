import ReactAudioPlayer from 'react-audio-player';

import React from 'react';

import './posts.css';


const Posts = () => {

return(
    <div>
<h1>Titre</h1>
<ReactAudioPlayer
        src={url}
        controls
        preload='auto'
      />
<p>Desciprion</p>
  </div>
)};




export default Posts;

