import React, { useState, useCallback } from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import kroonLogo from './kroon_vFinale.svg';

// on importe notre fonction utilitaire permettant de
// transformer le slug en url

import './nav.scss';

const Nav = () => (
  <nav className="nav">

    <NavLink
      className="logo"
      to="/"
      exact
    >
      <img src={kroonLogo} alt="Logo Kroon" />
    </NavLink>
    <ul>
      <li>
        <NavLink
          className="nav__link"
          to="/"
          activeClassName="nav__link--active"
          exact
        >
          Accueil
        </NavLink>
      </li>
      <li>
        <NavLink
          className="nav__link"
          to="/categories"
          activeClassName="nav__link--active"
          exact
        >
          Catégories
        </NavLink>
      </li>
      <li className="auth">
        <NavLink
          className="nav__link"
          to="/connexion"
          activeClassName="nav__link--active"
          exact
        >
          Connexion
        </NavLink>
      </li>
    </ul>
  </nav>
);
// TODO : ternaire si Logged or not

export default Nav;
