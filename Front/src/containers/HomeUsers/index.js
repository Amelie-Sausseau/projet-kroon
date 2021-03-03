import { connect } from 'react-redux';

import HomeUsers from 'src/components/HomeUsers';
import { fetchPosts } from '../../actions';
import { fetchLastsComments } from '../../actions/comments';
import { fetchAllPosts } from '../../actions/users';


const mapStateToProps = (state) => ({

  posts: state.mic.data,
  comments: state.comments.comments,
  lastComments: state.comments.lastComments,

});

const mapDispatchToProps = (dispatch) => ({
  manageLoad: () => {
    dispatch(fetchPosts());
    dispatch(fetchLastsComments());
    dispatch(fetchAllPosts());
  },

  // manageLoadComments: () => {
  //   dispatch(fetchLastsComments());
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeUsers);
