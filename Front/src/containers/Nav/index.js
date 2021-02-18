import { connect } from 'react-redux';

import Nav from 'src/components/Nav';

// import de l'action creator
import { clearField } from '../../actions/users';

const mapStateToProps = (state) => ({
    islogged: state.users.islogged,
});

const mapDispatchToProps = (dispatch) => ({
  buttonClearField: () => {
    // on dispatche le résultat de l'appel à notre creator
    // c'est à dire une action
    dispatch(clearField());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav)