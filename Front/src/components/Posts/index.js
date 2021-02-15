import ReactAudioPlayer from 'react-audio-player';

import React from 'react';

import './posts.css';


const Posts = ({data}) => {
console.log(data);
return(
    <div className="posts">
<ReactAudioPlayer
       /*  src={url} */
        controls
        preload='auto'
      />
    <div className="posts_description">
      <h1>Titre</h1>
      <p>Desciprion</p>
      <button>Se connecter</button>
      <button>S'inscrire</button>
    </div>
  </div>
)};




export default Posts;
