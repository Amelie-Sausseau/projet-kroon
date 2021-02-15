// == Import npm
import React, { useEffect, useState } from 'react';

// == Import
import './styles.css';
import LoginForm from 'src/components/LoginForm';
import SignupForm from 'src/components/SignupForm';
import Footer from 'src/components/Footer';
import Mic from 'src/containers/Mic';
import Posts from 'src/containers/Posts';
import Nav from 'src/components/Nav';
// import LoginForm from 'src/containers/LoginForm';

// == Composant
const App = ({ manageLoad, loading }) => {
  useEffect(
    manageLoad,
    [],
  );

  return (
    <div className="app">

      {loading && <div>Application en cours de chargement</div>}
      {!loading && (
      <>
        <Nav />
        <LoginForm />
        <Footer />

      </>
      )}

    </div>
  );
};
// == Export
export default App;
