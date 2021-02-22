import { ReactMic } from 'react-mic';
import ReactAudioPlayer from 'react-audio-player';
import PropTypes from 'prop-types';
import axios from 'axios';

import React from 'react';

import './mic.css';


const Mic = ({
  playStart, stopRecord, record, recordedSound, url, changeNewUrl, saveNewBlob, token
}) => {
  
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
  console.log(recordedBlob.blob)
    let blob = recordedBlob.blob

    saveNewBlob(blob);


    var blobUrl = URL.createObjectURL(blob);
/*     var xhr = new XMLHttpRequest;

    xhr.responseType = 'blob';

   xhr.onload = function() {
   var recoveredBlob = xhr.response;

   var reader = new FileReader;

   reader.onload = function() {
     var blobAsDataUrl = reader.result;
     window.location = blobAsDataUrl;
   };

   reader.readAsDataURL(recoveredBlob);
}; */

   console.log(blobUrl)

   changeNewUrl(blobUrl);


    send(blob);
/*     console.log(toto)
 */    /* if (
      window.navigator && 
      window.navigator.msSaveOrOpenBlob
    ) return window.navigator.msSaveOrOpenBlob(recordedBlob);

    // For other browsers:
    // Create a link pointing to the ObjectURL containing the blob.
    const data = window.URL.createObjectURL(recordedBlob.blob);

    const link = document.createElement('a');
    link.href = data;
    link.download = name;

    // this is necessary as link.click() does not work on the latest firefox
    link.dispatchEvent(
      new MouseEvent('click', { 
        bubbles: true, 
        cancelable: true, 
        view: window 
      })
    );

    setTimeout(() => {
      // For Firefox it is necessary to delay revoking the ObjectURL
      window.URL.revokeObjectURL(data);
      link.remove();
    }, 100); */
}


  function onStop(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
    recordedSound = true;
    downloadBlob(recordedBlob);
  }

const htmlClass = record ? 'button_play' : 'button_start';

  return (
    <div>
      <div className="buttonContainer">
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
{/*         <button onClick={uploadBlob} type="button" className="button_stop">III</button>
 */}
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
    </div>
  );
};

Mic.propTypes = {
  playStart: PropTypes.func.isRequired,
  stopRecord: PropTypes.func.isRequired,
  changeNewUrl: PropTypes.func.isRequired,
  saveNewBlob: PropTypes.func.isRequired,
  recordedSound: PropTypes.bool.isRequired,
  record: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
};


export default Mic;
