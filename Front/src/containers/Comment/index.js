import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Comments from 'src/components/Publications/Comments';
import { getPostsBySlug } from 'src/selectors/posts';
import { setReportPost } from '../../actions/posts';

const mapStateToProps = (state, ownProps) => {
  const { slug } = ownProps.match.params;

  return {
    post: getPostsBySlug(state, slug),

  };
};

const mapDispatchToProps = (dispatch) => ({

  clickReportPost: (postId) => {
    dispatch(setReportPost(postId));
  },

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comments));
