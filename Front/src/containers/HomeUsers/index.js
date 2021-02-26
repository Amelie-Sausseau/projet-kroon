import { connect } from 'react-redux';

import HomeUsers from 'src/components/HomeUsers';
import { fetchPosts } from '../../actions';


const mapStateToProps = (state) => ({

posts: state.mic.data,

});

const mapDispatchToProps = (dispatch) => ({
    manageLoad: () => {
      dispatch(fetchPosts());
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(HomeUsers);
