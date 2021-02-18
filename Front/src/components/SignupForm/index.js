import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './signup.scss';
import Field from './Field'

const SignupForm = ({ 
  email, 
  password, 
  name, 
  handlesignUp, 
  changeFieldCreate 
}) => {

  function handleSubmit(evt){
    evt.preventDefault();
    handlesignUp();
  }

  return (
<div className="titre">
    <h4>Kroon</h4>

  <div className="signup">
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
       placeholder="username" required 
       className="username" 
       name="name"
       onChange={changeFieldCreate}
       value={name}
       />
      <Field 
      type="text" 
      name="email"
      placeholder="email" 
      required className="password" 
      onChange={changeFieldCreate}
      value={email}
      className="email" 

      />
      <Field 
      type="text" 
      name="password"
      placeholder="password" required 
      className="password" 
      onChange={changeFieldCreate}
      value={password}
      />
{/*       <Field 
      type="text" 
      placeholder="confirm password"
       required className="password" 
       onChange={changeFieldCreate}
       value={password}
       /> */}
        <button type="submit" value="Submit" className="btn1">
          Créer mon compte
        </button>
    </form>
  </div>
  </div>
)};

export default SignupForm;
