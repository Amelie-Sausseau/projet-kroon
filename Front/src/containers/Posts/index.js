import { connect } from 'react-redux';

import Posts from 'src/components/Posts';

const mapStateToProps = (state) => ({
data: state,
posts: state.mic.data,

});

export default connect(mapStateToProps)(Posts);
