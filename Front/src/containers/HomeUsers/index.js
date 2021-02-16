import { connect } from 'react-redux';

import HomeUsers from 'src/components/Posts';

const mapStateToProps = (state) => ({

posts: state.mic.data,

});

export default connect(mapStateToProps)(HomeUsers);
