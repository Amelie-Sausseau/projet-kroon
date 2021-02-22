// == Import : npm
import React from 'react';

// == Import : local
// Composants
import CommentForm from '../../containers/CommentForm';
import Sound from './Sound';
import Comments from './Comments';

// Style
import './publications.scss';

// == Composant
function Publications() {
  return (
    <div className="publication">
      <Sound />
      <Comments />
      <CommentForm />
    </div>
  );
}

// == Export
export default Publications;
