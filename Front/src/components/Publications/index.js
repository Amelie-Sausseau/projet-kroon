// == Import : npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// == Import : local
// Composants
import Comment from 'src/components/Publications/Comments';
import Loader from 'src/components/Loader';
import CommentForm from '../../containers/CommentForm';
import Sound from './Sound';
import Avatar from '../../utils/avatar';

// Style
import './publications.scss';

// == Composant
function Publications({ post, manageLoad }) {
  console.log(post.tags);

  return (
    <>
      { post
        ? (
          <div className="publication">
            <Avatar className="avatar" />
            <div>{post.user.name}</div>
            {/* <h3>{post.tags.name}</h3> */}
            <h1 className="titlepost">{post.title}</h1>
            <Sound
              body={post.body}
              sound={post.sound}
            />
            <Comment className="comments" post={post} />
            <CommentForm className="form" />
          </div>
        )

        : <Loader />}
    </>

  );
}

// == Export
export default Publications;
