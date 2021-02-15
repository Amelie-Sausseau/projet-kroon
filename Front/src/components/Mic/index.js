import { ReactMic } from 'react-mic';
import ReactAudioPlayer from 'react-audio-player';


import React from 'react';

import './mic.css';


const Mic = ({playStart, stopRecord, record, recordedSound, url}) => {

  function onData(recorded) {
    console.log('recordedBlob play is: ', recorded);
  };

  function onStop(recordedBlob){
    console.log('chunk of real-time data is: ', recordedBlob);

    url=  recordedBlob,
    recordedSound = true
  }
  const htmlClass = record ? 'button_play' : 'button_start';

return(
    <div>
    <button onClick={playStart} type="button" className={htmlClass}>
     <ReactMic
       noiseSuppression={true}
       record={record}
       className="sound-wave"
       onStop={onStop}
       onData={onData}
     />
    </button>
    <button onClick={stopRecord} type="button">Stop</button>
{        
   recordedSound && (
        <ReactAudioPlayer
        src={url}
        controls
        preload='auto'
      />
       )
}
  </div>
)};




export default Mic;
