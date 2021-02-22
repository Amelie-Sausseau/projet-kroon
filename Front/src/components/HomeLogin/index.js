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

/* HomeLogin.propTypes = {
  buttonClearField: PropTypes.func.isRequired,
  islogged: PropTypes.bool.isRequired,
}; */

export default HomeLogin;
