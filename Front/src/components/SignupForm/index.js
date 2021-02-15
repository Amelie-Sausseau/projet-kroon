import React from 'react';
import PropTypes from 'prop-types';

import './signup.scss';

const SignupForm = ({ isClosed, toggle, manageSubmit }) => (
  <div className="signup">
    <form autoComplete="off" className="box">
      <h4>Kroon</h4>
      <h5>Je crée mon compte</h5>

      <input type="text" placeholder="username" required className="username" />
      <input type="text" placeholder="email" required className="password" />
      <input type="text" placeholder="password" required className="password" />
      <input type="text" placeholder="confirm password" required className="password" />
      <div className="btn-container">
        <button type="submit" value="Submit" className="btn1">
          Créer mon compte
        </button>
      </div>
    </form>
  </div>
);

export default SignupForm;
