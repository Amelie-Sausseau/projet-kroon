// == Import npm
import React, { useEffect, useState } from 'react';

// == Import
import './styles.css';
import LoginForm from 'src/components/LoginForm';
import SignupForm from 'src/components/SignupForm';
import Footer from 'src/components/Footer';
import Mic from 'src/containers/Mic';
import Posts from 'src/containers/Posts';
import Nav from '../../Nav';
// import LoginForm from 'src/containers/LoginForm';

// == Composant
<<<<<<< HEAD
const App = ({manageLoad, loading}) => {
=======
const App = ({ manageLoad, loading }) => {
>>>>>>> a3e58d49998c5da106fc2ca84f5d23c7ef66489b
  useEffect(
    manageLoad,
    [],
  );
<<<<<<< HEAD
  
return(
  <div className="app">
{loading && <div>Application en cours de chargement</div>}
{!loading && (
  <>
<Posts />
<Mic />
=======

  return (
    <div className="app">
>>>>>>> a3e58d49998c5da106fc2ca84f5d23c7ef66489b

      {loading && <div>Application en cours de chargement</div>}
      {!loading && (
      <>
        <Nav />
        <SignupForm />
        <Footer />

      </>
      )}

    </div>
  );
};
// == Export
export default App;
