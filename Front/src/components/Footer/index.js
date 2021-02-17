import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// on importe notre fonction utilitaire permettant de
// transformer le slug en url

import './footer.css';

const Footer = () => (

  <div className="footer">
<NavLink
className="sound"
to="/poster"
activeClassName="sound"
exact
>
Propose ton son
</NavLink>
  </div>
);

export default Footer;
