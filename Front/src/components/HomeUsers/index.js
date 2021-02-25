import React from 'react';
import { NavLink } from 'react-router-dom';
import PostCard from 'src/components/PostCard';
import './style.scss';
import ReactAudioPlayer from 'react-audio-player';


const HomeUsers = ({ posts }) => {

  console.log(posts);
const publi = "/publications/"
/* const data = window.URL.createObjectURL(posts.sound);
 */


  return (

  <div className="home">

    <div>
    <h1 /* className="titleHome" */>Kroon c'est quoi?</h1>
      <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when an unknown printer
        took a galley of type and scrambled it to make a type specimen book.
      </div>
     <h2 className="titleHome">Derniers sons</h2>
     
    { 
        posts.map((post) => (
          
          <NavLink to={publi + post.id}>
            <div>Username</div>
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

    <h2 className="titleHome">Meilleurs contributeurs</h2>

    <div className="last_sounds">
      <div className="caontainer-users">
    <h3>Titre du son</h3>
        <div className="best-users">Img Cat</div>
      </div>
      <div className="caontainer-users">
      <h3>Titre du son</h3>
        <div className="best-users">Img Cat</div>
      </div>
      <div className="caontainer-users">
      <h3>Titre du son</h3>
        <div className="best-users">Img Cat</div>
      </div>

    </div>
  </div>

)};

export default HomeUsers;
