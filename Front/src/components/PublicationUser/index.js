// == Import : npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// == Import : local
// Composants
import Comment from 'src/components/publicationUser/Comments';
import Loader from 'src/components/Loader';
import CommentForm from '../../containers/CommentForm';
import Sound from './Sound';
import Avatar from '../../utils/avatar';

// Style
import './publications.scss';

// == Composant
function PublicationUser({
  post,
  postBycomment,
  clickFavComp,
  clickDeleteFavComp,
  clickReportPost,
  logged,
}) {

  const [fav, setFav] = useState(false);
  const [report, setReport] = useState(false);

  function handleClickFav() {
    clickFavComp(post.id);
    setFav(true);
  }

  function handleClickDeleteFav() {
    clickDeleteFavComp(post.id);
    setFav(false);
  }

  function handleReportPost() {
    clickReportPost(post.id);
    setReport(true);
  }

  return (
    <>
      { post
        ? (
          <div className="publication">

            <div className="dimitri">Publié par : {post.user.name}</div>
            <h1 className="titlepost">{post.title}</h1>
            <h3>Catégorie : {post.tags.[0].name}</h3>
            <Sound
              body={post.body}
              sound={post.sound}
            />
            <div className="interac">
              {!fav ? (
                <i
                  className="lni lni-heart-filled"
                  onClick={handleClickFav}
                > <span className="interaction">Favoris</span>
                </i>
              ) : (
                <i
                  className="lni lni-heart-filled lni-heart-filled--active"
                  onClick={handleClickDeleteFav}
                > <span className="interaction">Favoris</span>
                </i>
              )}

              {!report ? (
                <i
                  className="lni lni-warning"
                  onClick={handleReportPost}
                >
                  <span className="interaction">Signaler</span>
                </i>
              ) : (
                <i
                  className="lni lni-warning lni-warning--active"
                >
                  <span className="interaction">Signaler</span>
                </i>
              )}
            </div>

            <Comment className="comments" comments={post.comments} />
            {logged ? (<CommentForm className="form" {...post} />) : (<p className="unlogged">Merci de vous connecter afin de proposer votre réponse !</p>) }
          </div>
        )

        : postBycomment ? (
          <div className="publication">
            <Avatar className="avatar" />
            <div>{/* {postBycomment.user.name} */}</div>
            <h1 className="titlepost">{postBycomment.title}</h1>
            <Sound
              body={post.body}
              sound={post.sound}
            />
            <Comment className="comments" comments={post.comments} />
            {logged ? (<CommentForm className="form" {...post} />) : (<p className="unlogged">Merci de vous connecter afin de proposer votre réponse !</p>) }
          </div>
        ) : <Loader />}
    </>

  );
}

// == Export
export default PublicationUser;
