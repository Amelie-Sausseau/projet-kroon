import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
/* import kroonLogo from './kroon_vFinale.svg';
 */
// on importe notre fonction utilitaire permettant de
// transformer le slug en url

import './nav.scss';

const Nav = ({ islogged, buttonClearField }) => (
  <div>
    {islogged && (
    <nav className="nav">

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

        <li>
          <NavLink
            className="nav__link "
            to="/poster"
            activeClassName="nav__link--active"
            exact
          >
            Poster
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav__link "
            to="/publications"
            activeClassName="nav__link--active"
            exact
          >
            Publications
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav__link "
            to="/equipe"
            activeClassName="nav__link--active"
            exact
          >
            Equipe
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav__link "
            to="/moncompte"
            activeClassName="nav__link--active"
            exact
          >
            Mon compte
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav__link "
            to="/contact"
            activeClassName="nav__link--active"
            exact
          >
            Contact
          </NavLink>
        </li>
        <li className="auth">
          <NavLink
            className="nav__link deco"
            to="/connexion"
            activeClassName="nav__link--active"
            exact
            onClick={buttonClearField}
          >
            Log out
          </NavLink>
        </li>
      </ul>
    </nav>
    )}

    {!islogged && (
    <nav className="nav">

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
        <li>
          <NavLink
            className="nav__link"
            to="/poster"
            activeClassName="nav__link--active"
            exact
            onClick={buttonClearField}
          >
            Team
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav__link "
            to="/contact"
            activeClassName="nav__link--active"
            exact
          >
            Contact
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
    )}
  </div>
);
// TODO : ternaire si Logged or not

export default Nav;
