import React from 'react';
import PropTypes from 'prop-types';

import './postform.scss';

const PostForm = ({ isClosed, toggle, manageSubmit }) => (
  <div className="signup">
    <form autoComplete="off" className="box">
      <select className="password" placeholder="Catégories">
          <option>Film</option>
          <option>Film</option>
      </select>
      <input type="text" placeholder="Tître" required className="password" />
      <input type="text" placeholder="Description" required className="password" />
      <div className="btn-container">
        <button type="submit" value="Submit" className="btn1">
          Poster
        </button>
      </div>
    </form>
  </div>
);

export default PostForm;
