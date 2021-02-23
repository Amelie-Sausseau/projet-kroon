import { connect } from 'react-redux';

import HomeUsers from 'src/components/HomeUsers';

const mapStateToProps = (state) => ({

posts: state.mic.data,

});

export default connect(mapStateToProps)(HomeUsers);
