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
   record && (
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


/* class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        record: false,
        recordedSound:false,
        url:'',
        
      }
    }
   
    startRecording = () => {
      this.setState({ record: true });
    }
   
    stopRecording = () => {
      this.setState({ record: false });
      this.setState({ recordedSound: true });
    }
   
    onData(recordedBlob) {
      console.log('chunk of real-time data is: ', recordedBlob);
    }
   
    onPlay = (recordedBlob) => {
      console.log('recordedBlob play is: ', recordedBlob);
      this.setState({url: recordedBlob.blobURL })
      console.log(this.setState.url) 
    }
  
    render() {
      const {recordedSound, url, record } = this.state
      console.log('render log' ,url);
      const htmlClass = record ? 'button_play' : 'button_start';
  
      return (
        <div>
          <button onClick={this.startRecording} type="button" className={htmlClass}>
           <ReactMic
             noiseSuppression={true}
             record={this.state.record}
             className="sound-wave"
             onStop={this.onPlay}
             onData={this.onData}
           />
          </button>
          <button onClick={this.stopRecording} type="button">Stop</button>
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
      );
    }
  }
  
  export default App; */