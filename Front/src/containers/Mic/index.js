import { connect } from 'react-redux';

import Mic from 'src/components/Mic';

import { playStart, stopRecord } from 'src/actions';



const mapStateToProps = (state) => ({
 record: state.record,
 recordedSound: state.recorded,
 url: state.value
});

const mapDispatchToProps = (dispatch) => ({
  playStart: () => {
    dispatch(playStart());
  },
  stopRecord: () => {
    dispatch(stopRecord());
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Mic);
