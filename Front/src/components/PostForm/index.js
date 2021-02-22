import React from 'react';
import { ReactMic } from 'react-mic';
import ReactAudioPlayer from 'react-audio-player';
import PropTypes from 'prop-types';
import axios from 'axios';
import './postform.scss';

const PostForm = ({ playStart, stopRecord, record, recordedSound, url, changeNewUrl, saveNewBlob, token }) => {


  function send(blob){
    axios.post("http://ec2-3-82-153-17.compute-1.amazonaws.com/api/v1/posts/",{
      sound: blob,
/*      name:"admin@kroon.fr",*/
      title: "test title",
      body:"test body",
      /* tag: "1", */
    },{
      'headers' : {
        "content-type" :  "form/multiParts",
        Authorization: `Bearer ${token}`,
      }
    })
    .then((response) => response.data)
    .catch((error) => {
      console.log(blob);
    })
  }

  function onData(recorded) {
    console.log('recordedBlob play is: ', recorded);
  }

  function downloadBlob(recordedBlob) {
    let blob = recordedBlob.blob
    saveNewBlob(blob);
    let blobUrl = URL.createObjectURL(blob);
    console.log(blobUrl)
    changeNewUrl(blobUrl);
    send(blob);
}


  function onStop(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
    recordedSound = true;
    downloadBlob(recordedBlob);
  }

const htmlClass = record ? 'button_play' : 'button_start';

  return (
    <div className="idk">
      <div className="buttonContainer">
      <h1>Propose ton son!</h1>

        <button onClick={playStart} type="button" className={htmlClass}>
          <ReactMic
            noiseSuppression
            record={record}
            className="sound-wave"
            onStop={onStop}
            onData={onData}
          />
          <div className="salut">salut</div>
        </button>
        <button onClick={stopRecord} type="button" className="button_stop">II</button>
      </div>
      {
   recordedSound && (
     <div className="audioPlayer">
   <ReactAudioPlayer
     src={url}
     controls
     preload="auto"
     className="audioPlayer"
   />
   </div>
   )
}
<form autoComplete="off" className="box" type="submit">
    <select className="categories" placeholder="Catégories">
      <option className="categories">Film</option>
      <option className="categories">Série</option>
      <option className="categories">Musique</option>
      <option className="categories">Générique</option>
      <option className="categories">Vidéo</option>
      <option className="categories">Animaux</option>
      <option className="categories">Autre</option>

    </select>
    <input type="text" placeholder="Tître" required className="title" />
    <input type="text" placeholder="Description" required className="description" />
    <div className="buttonSubmit" ><span>Envoyer</span></div>

  </form>
    </div>
  );
};
  
 
export default PostForm;
