/* eslint-disable spaced-comment */
import { connect } from 'react-redux';

import Compte from '../../components/Compte';
// on importe l'action creator
import { fetchPostUser, fetchCommentsUserLogin, fetchAllPosts } from '../../actions/users';

// on branche la propriété du composant de présentation
// Form sur la propriété newMessageValue du state du store.
const mapStateToProps = (state) => ({
  favories: state.users.favories,
  commentaires: state.users.comments,
  posts: state.users.posts,
 
});

// on branche notre propriété de type fonction
// manageMessageSubmit pour qu'elle puisse dispatcher
// une action vers le store.
const mapDispatchToProps = (dispatch) => ({
  fetchPostUser: () => {
    dispatch(fetchPostUser())
  },

  fetchCommentsUserLogin: () => {
    dispatch(fetchCommentsUserLogin())
  },  

  fetchAllPosts: () => {
    dispatch(fetchAllPosts())
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Compte);
