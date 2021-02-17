import React from 'react';
/* import PropTypes from 'prop-types';
 */
/* import PostCard from 'src/components/PostCard'; */
import Mic from 'src/containers/Mic';
import PostForm from 'src/components/PostForm';



/* import ImageGallery from 'react-image-gallery';
 */

import './style.scss';

const HomeLogin = () => (
  <div className="home_login">
    <h1>Propose ton son!</h1>
    <div className="mic">
    <Mic/>
    </div>
    <div className="form">
    <PostForm/>
    </div>
    
{/*     <PostCard/>
 */}
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

export default HomeLogin;
