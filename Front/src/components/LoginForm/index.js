import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Field from './Field';
// import { useField } from './hooks';

import './login.scss';

const LoginForm = ({ isClosed, toggle, manageSubmit }) => (
  <div className="login">
    <form autoComplete="off" className="box">
      <h4>Kroon</h4>
      <NavLink
        className="nav__link"
        to="/connexion"
        activeClassName="nav__link--active"
        exact
      >
        <h5>Je me connecte</h5>
      </NavLink>
      <NavLink
        className="nav__link"
        to="/connexion"
        activeClassName="nav__link--active"
        exact
      >
        <h5>Je crée mon compte</h5>
      </NavLink>
      <input type="text" placeholder="username" required className="username" />
      <input type="text" placeholder="password" required className="password" />
      <p className="reset-pswd">Mot de passe oublié</p>
      <div className="btn-container">
        <button type="submit" value="Submit" className="btn1">
          Connexion
        </button>
      </div>
    </form>
  </div>

);

export default LoginForm;
