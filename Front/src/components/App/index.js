/* eslint-disable import/no-unresolved */
// == Import npm
import React, { useEffect } from 'react';

// On importe le composant Route qui permet d'afficher les composant
// qu'il contient seulement si la route matche avec l'url courante.
import { Route } from 'react-router-dom';

// == Import
import './styles.css';
import LoginForm from 'src/components/LoginForm';
import SignupForm from 'src/components/SignupForm';
import Footer from 'src/components/Footer';
import Contact from 'src/components/Contact';
import Categories from 'src/components/Categories';
import HomeUsers from 'src/components/homeUsers';
import Loader from 'src/components/Loader';
import Burger from 'src/containers/Burger';
import HomeLogin from 'src/components/HomeLogin';

/* import Mic from 'src/containers/Mic';
 import Posts from 'src/containers/Posts';
import Nav from 'src/components/Nav';
import LoginForm from 'src/containers/LoginForm'; */

// == Composant
const App = ({ manageLoad, loading, homeLogin }) => {
  useEffect(
    manageLoad,
    [],
  );

  return (
    <div className="app">
      {loading && <Loader />}
      {!loading && !homeLogin && (
      <>
        {/* <Nav /> */}
        <Burger />
        <Route path="/categories" exact>
          <Categories />
          <Footer />
        </Route>
        <Route path="/" exact>
          <HomeUsers />
          <Footer />
        </Route>
        <Route path="/connexion" exact>
          <LoginForm />
        </Route>
        <Route path="/nouveaucompte" exact>
          <SignupForm />
        </Route>
        <Route path="/contact" exact>
          <Contact />
          <Footer />
        </Route>
      </>
      )}
      {!loading && homeLogin && (
      <>
        {/*         <Nav /> */}
        {/*        <Burger/>
 */}
        <Route path="/categories" exact>
          <Categories />
          <Footer />
        </Route>
        <Route path="/" exact>
          <HomeUsers />
          <Footer />
        </Route>
        <Route path="/poster" exact>
          <HomeLogin />
        </Route>
        <Route path="/contact" exact>
          <Contact />
          <Footer />
        </Route>
      </>
      )}
    </div>
  );
};
// == Export
export default App;
