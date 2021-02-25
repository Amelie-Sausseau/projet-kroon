import { connect } from 'react-redux';

import PostForm from 'src/components/PostForm';

import { playStart, stopRecord, changeUrl, saveBlob } from 'src/actions';
import { fetchCategories, changeInputPostValue } from 'src/actions/posts';



const mapStateToProps = (state) => ({
 record: state.mic.record,
 recordedSound: state.mic.recordedSound,
 url: state.mic.url,
 blob: state.mic.blob,
 token: state.users.token,
 categories: state.posts.categories,
 titre: state.posts.titre,
 body: state.posts.body,

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
  },

  fetchCategories: () => {
    dispatch(fetchCategories())
  },

  changeInputPostValueComp: (fieldValue, fieldName) => {
    dispatch(changeInputPostValue(fieldValue, fieldName))
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
