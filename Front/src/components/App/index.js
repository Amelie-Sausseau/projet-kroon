/* eslint-disable import/no-unresolved */
// == Import npm
import React, { useEffect, useState } from 'react';

// On importe le composant Route qui permet d'afficher les composant
// qu'il contient seulement si la route matche avec l'url courante.
import { Route } from 'react-router-dom';

// == Import
import './styles.css';
import LoginForm from 'src/components/LoginForm';
import SignupForm from 'src/components/SignupForm';
import Footer from 'src/components/Footer';
import Mic from 'src/containers/Mic';
import Posts from 'src/containers/Posts';
import Nav from 'src/components/Nav';
<<<<<<< HEAD
=======
import Contact from 'src/components/Contact';
import Categories from 'src/components/Categories';
import HomeUsers from 'src/components/homeUsers';

>>>>>>> f08333af523964282c6b9d1eee6f885655e6f0e6
// import LoginForm from 'src/containers/LoginForm';

// == Composant
const App = ({ manageLoad, loading }) => {
  useEffect(
    manageLoad,
    [],
  );

  return (
    <div className="app">
<<<<<<< HEAD

=======
>>>>>>> f08333af523964282c6b9d1eee6f885655e6f0e6
      {loading && <div>Application en cours de chargement</div>}
      {!loading && (
      <>
        <Nav />
<<<<<<< HEAD
        <LoginForm />
        <Footer />

=======
        <Route path="/categories" exact>
          <Categories />
        </Route>
        <Route path="/accueil" exact>
          <HomeUsers />
        </Route>
        <Route path="/connexion" exact>
          <LoginForm />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
>>>>>>> f08333af523964282c6b9d1eee6f885655e6f0e6
      </>
      )}
      <Footer />
    </div>
  );
};
// == Export
export default App;
