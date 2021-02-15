import { connect } from 'react-redux';

import Mic from 'src/components/Mic';

import { playStart, stopRecord, changeUrl  } from 'src/actions';



const mapStateToProps = (state) => ({
 record: state.record,
 recordedSound: state.recordedSound,
 url: state.url
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
