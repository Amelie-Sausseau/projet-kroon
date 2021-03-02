import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Publications from 'src/components/Publications';
import { getPostsBySlug } from 'src/selectors/posts';
import {
  saveCommentsUser,
  setFavorites,
  setDeleteFavorites,
  setReportPost,
} from '../../actions/posts';

const mapStateToProps = (state, ownProps) => {
  const { slug } = ownProps.match.params;

  return {
    post: getPostsBySlug(state, slug),

  };
};

const mapDispatchToProps = (dispatch) => ({
  manageLoad: () => {
    dispatch(saveCommentsUser());
  },

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Publications));
