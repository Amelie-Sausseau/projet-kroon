import React from 'react';
import PropTypes from 'prop-types';

import './postform.scss';

const PostForm = ({ isClosed, toggle, manageSubmit }) => (
    <form autoComplete="off" className="box">
      <select className="categories" placeholder="Catégories">
          <option className="categories">Film</option>
          <option className="categories">Film</option>
      </select>
      <input type="text" placeholder="Tître" required className="title" />
      <input type="text" placeholder="Description" required className="description" />
      <div className="button"><span>Click Me</span></div>

    </form>
);

export default PostForm;
