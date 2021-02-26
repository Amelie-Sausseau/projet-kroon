// == Import : npm
import React from 'react';

// == Import : local
// Composants
import CommentForm from '../../containers/CommentForm';
import Sound from './Sound';
import Comments from './Comments';
import Avatar from '../../utils/avatar';

// Style
import './publications.scss';

// == Composant
function Publications({post}) {
  console.log('console log du post récupéré', post);

 return(
  <>
    { post ? 
    <div className="publication">
  <Avatar className="avatar"/>

    <h1 className="titlepost">Titre du son</h1>
      <Sound 
       titre={post.title } 
      auteur={post.user.name} 
      />
      <Comments className="comments"/>
      <CommentForm className="form"/>
    </div>

    : "Patiente vilain "}
    </>
  
)};

// == Export
export default Publications;
