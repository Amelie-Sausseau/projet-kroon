import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'src/containers/Nav';
// on importe la fonction classnames depuis la lib classnames
import classnames from 'classnames';

import './style.scss';




const Burger = ({ isClosed, toggleFunction }) => {
  // const className = isClosed ? 'settings ' : 'settings';
 console.log(toggleFunction);
  // ici, on veut toujours la classe settings
  // et seulement la classe settings--closed si isClosed est vrai
const className = classnames('settings', { 'settings--closed active': !isClosed });
 return (
    <div className={className}>

     <div className='button'>
      <button
        type="button"
        className="settings__close m_button"
        onClick={
          () => {
            toggleFunction();
          }
        }
      >
  <span></span>
  <span className="span"></span>
  <span></span>
      </button>
    </div>
    <div className="nav">
    <Nav/>
    </div>
    </div>
  );
};

/* Settings.propTypes = {
  isClosed: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  manageSubmit: PropTypes.func.isRequired,
}; */

export default Burger;