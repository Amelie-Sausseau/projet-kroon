import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PublicationUser from 'src/components/PublicationUser';
import { fetchAllPosts } from '../../actions/users';


import { getPostsUserBySlug } from 'src/selectors/posts';


const mapStateToProps = (state, ownProps) => {

 const slug = ownProps.match.params.slug;
 return {
     post: getPostsUserBySlug(state, slug),
     postBycomment: state.users.comments.post,
 };


};

const mapDispatchToProps = (dispatch) => ({

  });




export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PublicationUser));

