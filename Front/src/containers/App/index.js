
import { connect } from 'react-redux';

import App from 'src/components/App';
import { fetchPosts } from '../../actions';

// étape 2
// on branche la prop loading de App sur l'infor dans le state

const mapStateToProps = (state) => ({
    loading: state.loading,
  });

const mapDispatchToProps = (dispatch) => ({
  manageLoad: () => {
    dispatch(fetchPosts());

  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

