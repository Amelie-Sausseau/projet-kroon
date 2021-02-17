import { connect } from 'react-redux';

import Burger from 'src/components/Burger';

// import de l'action creator
import { toggleMenu } from '../../actions/users';

const mapStateToProps = (state) => ({
  isClosed: state.users.menuIsClosed,
});

const mapDispatchToProps = (dispatch) => ({
  toggleFunction: () => {
    // on dispatche le résultat de l'appel à notre creator
    // c'est à dire une action
    dispatch(toggleMenu());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Burger)