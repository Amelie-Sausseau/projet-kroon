import { connect } from 'react-redux';

import MyForm from 'src/components/Contact2';
import { changeFieldSendMessage, sendMessage } from '../../actions/contact';

const mapStateToProps = (state) => ({
  name: state.contatc.name,
  email: state.contatc.email,
  message: state.contatc.message,

});

const mapDispatchToProps = (dispatch) => ({
    changeFieldSendMessage: (fieldValue, fieldName) => {
    dispatch(changeFieldSendMessage(fieldValue, fieldName));
  },

  sendMessage: () => {
    dispatch(sendMessage());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(MyForm);