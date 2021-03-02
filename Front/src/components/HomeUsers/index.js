import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PostCard from 'src/components/PostCard';
import './style.scss';
import ReactAudioPlayer from 'react-audio-player';


const HomeUsers = ({ posts, manageLoad }) => {
  useEffect(
    manageLoad,
    [],
  );

  console.log(posts);
const publi = "/publications/"
/* const data = window.URL.createObjectURL(posts.sound);
 */


  return (

  <div className="home">

    <div>
    <h1 /* className="titleHome" */>Kroon c'est quoi?</h1>
      <div>L'application qui te permet de retrouver un son qui te reste en tête, grâce à l'aide de la communauté !
      </div>
     <h2 className="titleHome">Derniers sons</h2>
     
    { 
        posts.map((post) => (
          
          <NavLink to={publi + post.id} key={post.id}>
            <div>{post.user.name}</div>
          <div className="last_posts" >
        <h3 id={post.id}>{post.title} </h3> 
        </div>


        <ReactAudioPlayer
         src={post.sound}
         controls
         preload="auto"
         className="audioPlayer"
   />
        </NavLink>
          )
          )
                
        } 

    </div>

    <h2 className="titleHome">Meilleurs commentaires</h2>

    <div className="comment.content">
      <div className="caontainer-users">
    <h3>Username</h3>
        <div className="best-users">Img Cat</div>
      </div>
      <div className="caontainer-users">
      <h3>Username</h3>
        <div className="best-users">Img Cat</div>
      </div>
      <div className="caontainer-users">
      <h3>Username</h3>
        <div className="best-users">Img Cat</div>
      </div>

    </div>
  </div>

)};

export default HomeUsers;
