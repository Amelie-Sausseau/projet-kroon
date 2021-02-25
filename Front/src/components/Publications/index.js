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
function Publications({post}) {
  console.log('console log pour Amélie', post);

 return(
    <div className="publication">

{/* {
        posts.map((categorie) =>        <h1 className="titlepost">Titre du son</h1>
        )
      } */}
    <h1 className="titlepost">Titre du son</h1>
      <Sound 
/*       titre={post.title} 
      auteur={post.user.name} */
      />
      <Comments className="comments"/>
      <CommentForm className="form"/>
    </div>
  
)};

// == Export
export default Publications;
