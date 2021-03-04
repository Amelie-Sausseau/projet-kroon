import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PublicationUser from 'src/components/PublicationUser';
import { fetchAllPosts } from '../../actions/users';

import {
  saveCommentsUser,
  setFavorites,
  setDeleteFavorites,
  setReportPost,
} from '../../actions/posts';

import { getPostsUserBySlug } from 'src/selectors/posts';


const mapStateToProps = (state, ownProps) => {

 const slug = ownProps.match.params.slug;
 return {
     post: getPostsUserBySlug(state, slug),
     postBycomment: state.users.comments.post,
     logged: state.users.logged,
 };


};

const mapDispatchToProps = (dispatch) => ({

  clickFavComp: (postId) => {
    dispatch(setFavorites(postId));
  },

  clickDeleteFavComp: (postId) => {
    dispatch(setDeleteFavorites(postId));
  },

  clickReportPost: (postId) => {
    dispatch(setReportPost(postId));
  },

  });




export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PublicationUser));

