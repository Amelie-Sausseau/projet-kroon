import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Publications from 'src/components/Publications';


import { getPostsBySlug } from '../../selectors/posts';


const mapStateToProps = (state, ownProps) => {

console.log(ownProps)
 const slug = ownProps.match.params.slug;
 console.log(slug)

 

 
 return {
     post: getPostsBySlug(state, slug),

 }

};



export default withRouter(connect(mapStateToProps)(Publications));

