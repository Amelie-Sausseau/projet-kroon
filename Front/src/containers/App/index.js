import { connect } from 'react-redux';

import App from 'src/components/App';
import { fetchPosts } from '../../actions';
import { fetchDataFromLS } from '../../actions/users';

// étape 2
// on branche la prop loading de App sur l'infor dans le state

const mapStateToProps = (state) => ({
  loading: state.mic.loading,
  logged: state.users.logged,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserDataFromLocalStorage: () => {
    dispatch(fetchDataFromLS())
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
