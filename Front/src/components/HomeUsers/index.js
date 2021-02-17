import React from 'react';
/* import PropTypes from 'prop-types';
 */
import PostCard from 'src/components/PostCard';
/* import ImageGallery from 'react-image-gallery';
 */

import './style.scss';

const HomeUsers = ({ posts }) => (
  <div className="home">
    <div >
      <h1>Edito</h1>
      <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when an unknown printer
        took a galley of type and scrambled it to make a type specimen book.
      </div>
 {/*      {
     posts.map((data) => (

       <PostCard key={data.id} {...data} />
     ))

   } */}
      <h2>Derniers sons</h2>

      <div className="last_soungs">
        {/*   <ImageGallery items={images} /> */}
        <div className="last_posts">
          <h3>Titre du son</h3>
          <div>Img Cat</div>
        </div>

        <div className="last_posts">
          <h3>Titre du son</h3>
          <div>Img Cat</div>
        </div>

        <div className="last_posts">
          <h3>Titre du son</h3>
          <div>Img Cat</div>
        </div>
      </div>

    </div>

    <h2>Meilleurs contributeurs</h2>

    <div className="last_sounds">

      <div className="last_posts">
        <h3>Titre du son</h3>
        <div>Img Cat</div>
      </div>
      <div className="last_posts">
        <h3>Titre du son</h3>
        <div>Img Cat</div>
      </div>
      <div className="last_posts">
        <h3>Titre du son</h3>
        <div>Img Cat</div>
      </div>

    </div>
  </div>

);

/* HomeUsers.propTypes = {
  // je veux que ma props recipes soit un tableau
  recipes: PropTypes.arrayOf(
    // plus précisément un tableau d'objet (d'une forme particulière)
    PropTypes.shape({
      // un objet, oui, mais un objet qui a une propriété id de type numérique
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  title: PropTypes.string.isRequired,
}; */

export default HomeUsers;
