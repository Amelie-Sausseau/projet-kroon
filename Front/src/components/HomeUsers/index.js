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




      <div>
        Where does it come from?
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
      </div>

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
