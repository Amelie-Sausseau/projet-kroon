import ReactAudioPlayer from 'react-audio-player';

import React from 'react';

import './posts.scss';

const Posts = ({ data }) => {
  const postsData = data.mic.data.data;
  console.log('je fais un console log de', postsData);
  const dataFromArray = data.mic.data;
  console.log('plop', dataFromArray);

  return (
    <div>
      {
      postsData.map((data) => (
        <div>

          <h1>Titre</h1>
          <ReactAudioPlayer
          /* src={url} */
            controls
            preload="auto"
          />
          <p>Desciprion</p>
        </div>

      ))
    }
    </div>
  );
};

export default Posts;
