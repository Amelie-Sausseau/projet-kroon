import React from 'react';

import './style.scss';

const HomeUsers = () => (
  <div>
    <div className="home">
      <h1>Edito</h1>
      <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when an unknown printer
        took a galley of type and scrambled it to make a type specimen book.
      </div>

      <h2>Derniers sons</h2>

      <div className="last_soungs">
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

export default HomeUsers;
