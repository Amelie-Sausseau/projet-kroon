import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './signup.scss';
import Field from './Field1';

const SignupForm = ({
  email,
  password,
  name,
  handlesignUp,
  changeFieldCreate,
}) => {
  function handleSubmit(evt) {
    evt.preventDefault();
    handlesignUp();
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
        >
          Je crée mon compte
        </NavLink>
      </div>
      <form autoComplete="off" className="box" onSubmit={handleSubmit}>
        <Field
          type="text"
          placeholder="Pseudo"
          required
          className="username"
          name="name"
          onChange={changeFieldCreate}
          value={name}
        />
        <Field
          type="text"
          name="email"
          placeholder="Email"
          required
          className="password"
          onChange={changeFieldCreate}
          value={email}
        />
        <Field
          type="password"
          name="password"
          placeholder="  Mot de passe"
          required
          className="password"
          onChange={changeFieldCreate}
          value={password}
        />
        <button type="submit" value="Submit" className="signup-form-button">
          Créer mon compte
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
