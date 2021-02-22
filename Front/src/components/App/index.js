/* eslint-disable import/no-unresolved */
// == Import yarn
import React, { useEffect } from 'react';
<<<<<<< HEAD

// On importe le composant Route qui permet d'afficher les composant
// qu'il contient seulement si la route matche avec l'url courante.
import { Route } from 'react-router-dom';
=======
import { Route, Redirect } from 'react-router-dom';
>>>>>>> 4580870b93867ef2fb3f6b5d2a2877e6c9b94c70
import PropTypes from 'prop-types';

// == Import local
import './styles.css';
import kroonLogo from './kroon_vFinale.svg';
import LoginForm from 'src/containers/LoginForm';
import SignupForm from 'src/containers/SignupForm';
import Footer from 'src/components/Footer';
import Contact from 'src/components/Contact';
import Categories from 'src/components/Categories';
import Loader from 'src/components/Loader';
import Burger from 'src/containers/Burger';
import HomeLogin from 'src/components/HomeLogin';
import HomeUsers from 'src/components/HomeUsers';
<<<<<<< HEAD
import Publications from 'src/components/Publications';
import kroonLogo from './kroon_vFinale.svg';
/* import Mic from 'src/containers/Mic';
 import Posts from 'src/containers/Posts';
import Nav from 'src/components/Nav';
import LoginForm from 'src/containers/LoginForm'; */
=======

>>>>>>> 4580870b93867ef2fb3f6b5d2a2877e6c9b94c70

// == Composant
const App = ({ manageLoad, loading, islogged }) => {
  useEffect(
    manageLoad,
    [],
  );

  return (
    <div className="app">
      {loading && <Loader />}
      {!loading && !islogged ? (
      <>
        <img src={kroonLogo} alt="Logo Kroon" className="logo" />
        <Burger />
        <Route path="/categories" exact>
          <Categories />
          <Footer />
        </Route>
        <Route path="/" exact>
          <HomeUsers />
          <Footer />
        </Route>
        <Redirect from="/poster" to="/connexion" />
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
      ) : ( 
      <>
<<<<<<< HEAD
        <img src={kroonLogo} alt="Logo Kroon" />
        <Burger />
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
        <Route path="/publications" exact>
          <Publications />
        </Route>
      </>
=======
      <img src={kroonLogo} alt="Logo Kroon" />
      <Burger />
      <Route path="/categories" exact>
        <Categories />
        <Footer />
      </Route>
      <Route path="/" exact>
        <HomeUsers />
        <Footer />
      </Route>
      <Redirect from="/connexion" to="/poster" />
      <Route path="/poster" exact>
        <HomeLogin />
      </Route>
      <Route path="/contact" exact>
        <Contact />
        <Footer />
      </Route>
    </>
>>>>>>> 4580870b93867ef2fb3f6b5d2a2877e6c9b94c70
      )}
    </div>
  );
};

App.propTypes = {
  manageLoad: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  islogged: PropTypes.bool.isRequired,
};

// == Export
export default App;
