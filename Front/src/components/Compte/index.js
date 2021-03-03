import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-audio-player';
import { NavLink } from 'react-router-dom';
import Comments from './Comments';

import './compte.scss';

const Compte = ({
  fetchPostUser,
  fetchCommentsUserLogin,
  posts,
  commentaires,
  fetchAllPosts,
  fetchFavoritesUserComp,
  favorites,
  setDelete,
}) => {
  useEffect(
    fetchAllPosts,
    [],
  );

  console.log(favorites);
  console.log(commentaires);

  const [cat, setCat] = useState(false);
  const [comments, setComments] = useState(false);
  const [fav, setFav] = useState(false);
  const publi = '/publicationsUser/';

  function onClickCat() {
    setCat(!cat);
    fetchPostUser();
  }

  function onClickComment() {
    setComments(!comments);
    fetchCommentsUserLogin();
  }

  function onClickFav() {
    setFav(!fav);
    fetchFavoritesUserComp();
  }

/*   function deletePost() {
    console.log('delete sa race');
    console.log(posts.id);
    setDelete(post.id);
  }
 */
  return (
    <div className="container">

      <div
        onClick={onClickCat}
        className="UserSound"
      >
        <h1>Mes Sons </h1>

      </div>
      {
        posts.map((post) => (

          cat
            ? (
              <NavLink to={publi + post.id}>
                <div>
                  <div className="poubelle">
                    <h2>{post.title}</h2>
                   {/*  <i className="lni lni-trash" onClick={deletePost(post.id)} /> */}
                  </div>
                  <ReactAudioPlayer
                    src={post.sound}
                    controls
                    preload="auto"
                  />
                </div>
              </NavLink>
            )
            : null

        ))
      }

      <div
        className="UserComments"
        onClick={onClickComment}
      >
        <h1>Mes Commentaires</h1>
      </div>

      {
       commentaires.map((commentaire) => (
         comments
           ? (
             <NavLink to={publi + commentaire.post.id}>
               <Comments body={commentaire.body} title={commentaire.post.title} />
             </NavLink>
           )
           : null
       ))
    }

      <div
        className="UserFavorites"
        onClick={onClickFav}
      >
        <h1>Mes Favoris</h1>
      </div>
      {
        favorites.map((post) => (

          fav
            ? (
              <NavLink to={publi + post.id}>
                <div>
                  <h2>{post.title}</h2>
                  <ReactAudioPlayer
                    src={post.sound}
                    controls
                    preload="auto"
                  />
                </div>
              </NavLink>
            )
            : null

        ))
      }
    </div>
  );
};

export default Compte;
