import { ReactMic } from 'react-mic';
import ReactAudioPlayer from 'react-audio-player';

import React from 'react';

import './mic.css';

const Mic = ({
  playStart, stopRecord, record, recordedSound, url, changeNewUrl, saveNewBlob,
}) => {
  function onData(recorded) {
    console.log('recordedBlob play is: ', recorded);
  }

  function downloadBlob(recordedBlob,  name = 'blob.mp3') {
    if (
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
    }, 100);
}


  function onStop(recordedBlob, name = './data') {
    console.log('chunk of real-time data is: ', recordedBlob);
    recordedSound = true;
    changeNewUrl(recordedBlob.blobURL);
    saveNewBlob(recordedBlob);

    downloadBlob(recordedBlob);
    
  }

/*   console.log(url, 'salut');*/  
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

export default Mic;
