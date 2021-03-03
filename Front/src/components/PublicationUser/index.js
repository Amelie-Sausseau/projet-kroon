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
}) {
  console.log(post.tags.[0].name);
  console.log(post.id);

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
            {!fav ? (
              <i
                className="lni lni-heart-filled"
                onClick={handleClickFav}
              />
            ) : (
              <i
                className="lni lni-heart-filled lni-heart-filled--active"
                onClick={handleClickDeleteFav}
              />
            )}
            {!report ? (
              <i
                className="lni lni-warning"
                onClick={handleReportPost}
              />
            ) : (
              <i
                className="lni lni-warning lni-warning--active"
              />
            )}
            <Sound
              body={post.body}
              sound={post.sound}
            />
            <Comment className="comments" comments={post.comments} />
            <CommentForm className="form" {...post} />
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
            <CommentForm className="form" {...post} />
          </div>
        ) : <Loader />}
    </>

  );
}

// == Export
export default PublicationUser;
