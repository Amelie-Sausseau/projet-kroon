// == Import : npm
import React from 'react';
// == Import : local
import './styles.css';

// == Composant
const Sound = () => (
  <header className="presentation">
    {/* <img
      src={thumbnail}
      alt="Bonnes crêpes"
      className="presentation-image"
    /> */}
    <div className="presentation-content">
      <h1 className="presentation-title">title du sound</h1>
      <p className="presentation-infos">auteur</p>
    </div>
  </header>
);

// == Export
export default Sound;
