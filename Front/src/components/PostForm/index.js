import React from 'react';
import PropTypes from 'prop-types';

import './postform.scss';

const PostForm = ({ isClosed, toggle, manageSubmit }) => (
  <form autoComplete="off" className="box">
    <select className="categories" placeholder="Catégories">
      <option className="categories">Film</option>
      <option className="categories">Série</option>
      <option className="categories">Musique</option>
      <option className="categories">Générique</option>
      <option className="categories">Vidéo</option>
      <option className="categories">Animaux</option>
      <option className="categories">Autre</option>

    </select>
    <input type="text" placeholder="Tître" required className="title" />
    <input type="text" placeholder="Description" required className="description" />
    <div className="buttonSubmit"><span>Envoyer</span></div>

  </form>
);

export default PostForm;
