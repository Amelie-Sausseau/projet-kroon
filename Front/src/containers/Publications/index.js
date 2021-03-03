import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Publications from 'src/components/Publications';
import { saveCommentsUser } from '../../actions/posts';


import { getPostsBySlug } from 'src/selectors/posts';


const mapStateToProps = (state, ownProps) => {

 const slug = ownProps.match.params.slug;

 return {
     post: getPostsBySlug(state, slug),

 }

};

const mapDispatchToProps = (dispatch) => ({
    manageLoad: () => {
      dispatch(saveCommentsUser());
    },
  });




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Publications));

