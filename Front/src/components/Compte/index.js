import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-audio-player';
import Comments from './Comments';
import { NavLink } from 'react-router-dom';


import './compte.scss';

const Compte = ({ fetchPostUser, fetchCommentsUserLogin, posts, commentaires, fetchAllPosts}) => {
  useEffect(
    fetchAllPosts,
    [],
  );



  console.log(posts);
  console.log(commentaires);

  const [cat, setCat] = useState(false);
  const [comments, setComments] = useState(false);
  const [fav, setFav] = useState(false);
  const publi = "/publicationsUser/"

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
          
            cat ? 
            <NavLink to={publi + post.id} >
            <div>     
              <h2>{post.title}</h2>
              <ReactAudioPlayer
             src={post.sound} 
           controls
           preload="auto"
         />
         </div> 
         </NavLink>
         : null
         
        ))
      }
      
  <div className="UserComments"
  onClick={onClickComment}>
    <h1>Mes Commentaires</h1> 
    </div>

   {
       commentaires.map((commentaire) => (
        comments ? 
        <NavLink to={publi + commentaire.post.id} >
        <Comments body={commentaire.body} title={commentaire.post.title}  /> 
        </NavLink>
             : null
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
