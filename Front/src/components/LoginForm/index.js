import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// import Field from './Field';
// import { useField } from './hooks';

import './login.scss';

const LoginForm = ({ isClosed, toggle, manageSubmit }) => (
  <div className="login">
    <form autoComplete="off" className="box">
      <h4>Kroon</h4>
<<<<<<< HEAD
      <h5>Je me connecte</h5>
      <Field type="text" placeholder="username" required className="username" />
      <Field type="text" placeholder="password" required className="password" />
=======
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
      <input type="text" placeholder="password" required className="password" />
>>>>>>> f08333af523964282c6b9d1eee6f885655e6f0e6
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
