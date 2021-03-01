// == Import : npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// == Import : local
// Composants
import CommentForm from '../../containers/CommentForm';
import Sound from './Sound';
import Comment from 'src/components/publicationUser/Comments';
import Avatar from '../../utils/avatar';
import Loader from 'src/components/Loader';


// Style
import './publications.scss';

// == Composant
function PublicationUser({post, postBycomment}) {
/*   console.log(post.tags)
 */

 console.log(post.comments)
 return(
  <>
    { post ? 
    <div className="publication">
  <Avatar className="avatar"/>
    <div>{post.user.name}</div>
    <h1 className="titlepost">{post.title}</h1>
      <Sound 
      body={post.body}
      sound={post.sound} 
      />
      <Comment className="comments" comments={post.comments}/>
      <CommentForm className="form"/>
    </div>

    : postBycomment ? <div className="publication">
    <Avatar className="avatar"/>
      <div>{/* {postBycomment.user.name} */}</div>
      <h1 className="titlepost">{postBycomment.title}</h1>
        <Sound 
        body={post.body}
        sound={post.sound} 
        />
        <Comment className="comments" comments={post.comments}/>
        <CommentForm className="form"/>
      </div> : <Loader/>}
    </>

)};

// == Export
export default PublicationUser;

