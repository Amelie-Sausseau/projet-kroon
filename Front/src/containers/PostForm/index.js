import { connect } from 'react-redux';

import PostForm from 'src/components/PostForm';

import { playStart, stopRecord, changeUrl, saveBlob  } from 'src/actions';



const mapStateToProps = (state) => ({
 record: state.mic.record,
 recordedSound: state.mic.recordedSound,
 url: state.mic.url,
 blob: state.mic.blob,
 token: state.users.token

});

const mapDispatchToProps = (dispatch) => ({
  playStart: () => {
    dispatch(playStart());
  },
  stopRecord: () => {
    dispatch(stopRecord());
  },

  changeNewUrl :(value) =>{
    dispatch(changeUrl(value))
  },

  saveNewBlob: (value) =>{
     dispatch(saveBlob(value)) 
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
