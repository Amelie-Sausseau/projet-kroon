/* eslint-disable spaced-comment */
import { connect } from 'react-redux';

import CommentForm from '../../components/CommentForm';
// on importe l'action creator
import { addComments, setNewComment, addCommentsToDB } from '../../actions/comments';

// on branche la propriété du composant de présentation
// Form sur la propriété newMessageValue du state du store.
const mapStateToProps = (state) => ({
  inputCommentValue: state.comments.body,
});

// on branche notre propriété de type fonction
// manageMessageSubmit pour qu'elle puisse dispatcher
// une action vers le store.
const mapDispatchToProps = (dispatch/*, ownProps*/) => ({
  manageCommentSubmit: () => {
    // on se sert de l'action creator pour qui nous fournisse
    // l'action à dispatcher
    // nous voulons envoyer le commentaire au serveur
    console.log('je passe dans manageCommentSubmit');
    dispatch(addComments());
  },
  setInputCommentValue: (value) => {
    dispatch(setNewComment(value));
  },

  handleAddCommentToDB: (postId) => {
    dispatch(addCommentsToDB(postId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
