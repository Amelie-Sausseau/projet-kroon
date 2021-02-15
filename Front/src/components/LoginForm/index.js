import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';
// import { useField } from './hooks';

import './login.scss';

const LoginForm = ({ isClosed, toggle, manageSubmit }) => (
  <div className="login">
    <form autoComplete="off" className="box">
      <h4>Kroon</h4>
      <h5>Je me connecte</h5>
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
