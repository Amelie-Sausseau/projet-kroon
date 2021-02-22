import React, { useSelector } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
/* import Field from "./Field"
 */
// import Field from './Field';
// import { useField } from './hooks';

import './login.scss';
import Field from './Field';

const LoginForm = ({
  username,
  password,
  changeField,
  handleLogin,
  handleLogout,
  Logged,
}) => {
  function handleSubmit(evt) {
    evt.preventDefault();
    handleLogin();

    () => {
      browserHistory.push('/');
    };

    /*     setTimeout(() => {
      props.history.push('/poster')
    }, 2000)
 */
  }
  return (
    <div className="titre">
      <h4>Kroon</h4>
      <div className="loginContainer">
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
          onClick={handleLogout}
        >
          Je crée mon compte
        </NavLink>
      </div>

      <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
        <Field
          className="username"
          name="username"
          placeholder="Adresse Email"
          onChange={changeField}
          value={username}
        />
        <Field
          className="password"
          name="password"
          type="password"
          placeholder="Mot de passe"
          onChange={changeField}
          value={password}
        />
        <button
          type="submit"
          className="login-form-button"
        >
          OK
        </button>
      </form>
    </div>

  );
};

export default LoginForm;
