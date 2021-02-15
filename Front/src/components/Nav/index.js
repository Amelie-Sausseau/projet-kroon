import React from 'react';
import PropTypes from 'prop-types';
import kroonLogo from './kroon_vFinale.svg';
/* import { NavLink } from 'react-router-dom';

// on importe notre fonction utilitaire permettant de 
// transformer le slug en url
import { getRecipeUrlByTitle } from '../../utils/recipes'; */

import './nav.css';

const Nav = () => (
         
  <nav className="nav">
<img src={kroonLogo} alt="Logo Kroon" /> 
    <ul>
        <li>
            Accueil
        </li>
        <li>
            Catégories
        </li>
        <li className="auth">
            Connexion
          </li>
    </ul>
  </nav>
);

// TODO : ternaire si Logged or not

export default Nav;
