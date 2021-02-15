import { connect } from 'react-redux';

import Mic from 'src/components/Mic';

import { playStart, stopRecord, changeUrl  } from 'src/actions';



const mapStateToProps = (state) => ({
 record: state.mic.record,
 recordedSound: state.mic.recordedSound,
 url: state.mic.url
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

  

});

export default connect(mapStateToProps, mapDispatchToProps)(Mic);
