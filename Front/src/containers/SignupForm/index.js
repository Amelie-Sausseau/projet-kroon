import { connect } from 'react-redux';

import SignupForm from 'src/components/SignupForm';
import { changeFieldCreateUser, signUp, clearField } from '../../actions/users';

const mapStateToProps = (state) => ({
  email: state.users.email,
  password: state.users.password,
  name: state.users.name,

/*   isLogged: state.user.logged,
  loggedMessage: state.user.logged ? `connecté en tant que ${state.user.username}` : '', */
});

const mapDispatchToProps = (dispatch) => ({
  changeFieldCreate: (fieldValue, fieldName) => {
    dispatch(changeFieldCreateUser(fieldValue, fieldName));
  },
  clearFieldinput: () => {
    dispatch(clearField());
  }, 
  
  handlesignUp: () => {
    dispatch(signUp());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);