// étape 3 : on branche notre composant de présentation LoginForm sur
// le state pour ses props email et password.

// étape 6 : on branche la prop changeField pour qu'elle puisse
// dispatcher une action vers le store

// étape 9 : on crée une fonction qui sera passée au composant de 
// présentation LoginForm par l'intermédiaire de sa prop handleLogin
// cette fonction permt de dispatcher l'acion logIn vers le store
// Elle sera intercepté par un middleware : authMiddleware.
import { connect } from 'react-redux';

import LoginForm from 'src/components/LoginForm';
import { changeUserField, logIn, logOut, clearField } from '../../actions/users';

const mapStateToProps = (state) => ({
  username: state.users.username,
  password: state.users.password,
/*   isLogged: state.user.logged,
  loggedMessage: state.user.logged ? `connecté en tant que ${state.user.username}` : '', */
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (fieldValue, fieldName) => {
    dispatch(changeUserField(fieldValue, fieldName));
  },
  handleLogin: () => {
    dispatch(logIn());
  },
  handleLogout: () => {
    dispatch(logOut());
  },

  clearFieldInput: () => {
    dispatch(clearField());
  }, 
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);