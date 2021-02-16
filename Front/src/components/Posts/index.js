import ReactAudioPlayer from 'react-audio-player';
import PropTypes from 'prop-types';

import React from 'react';

import './posts.scss';

const Posts = ({ posts }) => {
  
  console.log(posts);

  return (
    <div>
 {
  posts.map((data) => (
    <div >

    <h1>{data.title}</h1>
    <ReactAudioPlayer controls preload='auto' /* src={url} */ />
    <p>{data.body}</p>
    </div>

  ))
}
    </div>
  );
};


Posts.propTypes = {
  // je veux que ma props recipes soit un tableau
  posts: PropTypes.arrayOf(
    // plus précisément un tableau d'objet (d'une forme particulière)
    PropTypes.shape({
      // un objet, oui, mais un objet qui a une propriété id de type numérique
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};


export default Posts;



