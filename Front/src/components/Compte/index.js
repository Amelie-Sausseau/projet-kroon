import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-audio-player';
import Comments from './Comments';

import './compte.scss';

const Compte = ({ fetchPostUser, fetchCommentsUserLogin, posts, commentaires}) => {

  console.log(posts);
  console.log(commentaires);

  const [cat, setCat] = useState(false);
  const [comments, setComments] = useState(false);
  const [fav, setFav] = useState(false);

  function onClickCat (){
    setCat(!cat)
    fetchPostUser()
    }

  function onClickComment (){
  setComments(!comments)
  fetchCommentsUserLogin()
  }

  function onClickFav (){
    setFav(!fav)
    /* fetchCommentsUserLogin() */
    }

return (
<div className="container">

    <div onClick={onClickCat}
    className="UserSound">
      <h1>Mes Sons </h1>
      
      </div>
      {
        posts.map((post) => (
          
            cat ? <div>     
              <h2>{post.title}</h2>
              <ReactAudioPlayer
             src={post.sound} 
           controls
           preload="auto"
         />
         </div> : null
         
        ))
      }


    
    
  

  <div className="UserComments"
  onClick={onClickComment}>
    <h1>Mes Commentaires</h1> 
    </div>

   {
       commentaires.map((commentaire) => (
        comments ? <Comments body={commentaire.body} title={commentaire.post.title}  /> : null
       ))
    }

  <div className="UserFavorites"
  onClick={onClickFav}>
    <h1>Mes Favoris</h1> 
    </div>
    {
       fav ? <div>ICI S'AFFICHERONT LES FAVORIES DE L'USER</div> : null
    }  
  </div>
)};

export default Compte;
