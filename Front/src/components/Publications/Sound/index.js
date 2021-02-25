// == Import : npm
import React from 'react';
// == Import : local
import './styles.css';

import ReactAudioPlayer from 'react-audio-player';


// == Composant
const Sound = ({auteur, titre}) => (
  <header className="presentation">
    {/* <img
      src={thumbnail}
      alt="Bonnes crêpes"
      className="presentation-image"
    /> */}
    <div className="presentation-content">
      <h1 className="presentation-title">{titre}</h1>
      <p className="presentation-infos">{auteur}</p>
      <ReactAudioPlayer
     /* src={url} */
     controls
     preload="auto"
     className="audioPlayer"
   />
    </div>
  </header>
);

// == Export
export default Sound;
