import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PostCard from 'src/components/PostCard';
import './style.scss';
import ReactAudioPlayer from 'react-audio-player';

const HomeUsers = ({ posts, manageLoad, comments, fetchLastsComments, lastComments }) => {
  useEffect(
    manageLoad,
    [],
  );

  console.log(posts);
  console.log(lastComments);
  const publi = '/publications/';
  const publiComment = '/publicationsUser/';

  /* const data = window.URL.createObjectURL(posts.sound);
 */

/*   useEffect(
    fetchLastsComments,
    [],
  );
 */
  return (

    <div className="home">

      <div>
        <h1>Kroon c'est quoi ?</h1>
        <div className="intro">L'application qui te permet de retrouver un son qui te reste en tête,
          grâce à l'aide de la communauté !
        </div>
        <h2 className="titleHome">Derniers sons</h2>

        {
        posts.map((post) => (

          <NavLink to={publi + post.id} key={post.id}>
            <div className="home-container">
              <div>{post.user.slug}</div>
              <div className="last_posts">
                <div id={post.id} className="titleHomeUser">{post.title} </div>
              </div>

              <ReactAudioPlayer
                src={post.sound}
                controls
                preload="auto"
                className="audioPlayer"
              />
            </div>
          </NavLink>
        ))

        }

      </div>

      <h2 className="titleHome">Les derniers commentaires</h2>

      {
        lastComments.map((comment) => (

          <NavLink to={publiComment + comment.post.id} key={comment.id}>
            <div className="home-container">
              <div>{comment.post.title}</div>
              <div className="last_posts">
                <div id={comment.id} className="body">{comment.body} </div>
              </div>
            </div>
          </NavLink>
        ))

        }
    </div>

  );
};

export default HomeUsers;
