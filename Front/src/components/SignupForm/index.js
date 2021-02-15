import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './signup.scss';

const SignupForm = ({ isClosed, toggle, manageSubmit }) => (
  <div className="signup">
    <form autoComplete="off" className="box">
      <h4>Kroon</h4>
      <NavLink
        className="connexion"
        to="/connexion"
        activeClassName="connexion--active"
        exact
      >
        Je me connecte
      </NavLink>
      <NavLink
        className="connexion"
        to="/nouveaucompte"
        activeClassName="connexion--active"
        exact
      >
        Je crée mon compte
      </NavLink>
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
