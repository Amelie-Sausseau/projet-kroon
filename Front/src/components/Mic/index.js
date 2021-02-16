import { ReactMic } from 'react-mic';
import ReactAudioPlayer from 'react-audio-player';

import React from 'react';

import './mic.css';

const Mic = ({
  playStart, stopRecord, record, recordedSound, url, changeNewUrl,
}) => {
  function onData(recorded) {
    console.log('recordedBlob play is: ', recorded);
  }

  function onStop(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
    recordedSound = true;
    changeNewUrl(recordedBlob.blobURL);
  }

  console.log(url, 'salut');
  const htmlClass = record ? 'button_play' : 'button_start';

  return (
    <div>
      <div className="button">
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
   <ReactAudioPlayer
     src={url}
     controls
     preload="auto"
     className="audioPlayer"
   />
   )
}
    </div>
  );
};

export default Mic;
