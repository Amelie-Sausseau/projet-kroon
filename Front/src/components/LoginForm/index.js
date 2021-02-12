import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';
// import { useField } from './hooks';

import './styles.css';

const LoginForm = ({ isClosed, toggle, manageSubmit }) => {
  return (
    <div className="login-form">
        <form autoComplete="off" className="login-form-element">
          <Field
            name="email"
            placeholder="Adresse mail"
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"

          />
          <button
            type="submit"
            className="login-form-button"
          >
            Se connecter
          </button>
        </form>
    </div>
  );
};

export default LoginForm;
