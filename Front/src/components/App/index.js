/* eslint-disable import/no-unresolved */
// == Import yarn
import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import local
import './styles.css';
import LoginForm from 'src/containers/LoginForm';
import SignupForm from 'src/containers/SignupForm';
import Footer from 'src/components/Footer';
import Contact from 'src/components/Contact';
import Categories from 'src/components/Categories';
import Loader from 'src/components/Loader';
import Burger from 'src/containers/Burger';
import HomeLogin from 'src/components/HomeLogin';
import HomeUsers from 'src/components/HomeUsers';
import Publications from 'src/components/Publications';
import MyAccount from 'src/components/Account';
import Account2 from 'src/components/account2';
import Account3 from 'src/components/account3';
import kroonLogo from './kroon_vFinale.svg';
/* import Mic from 'src/containers/Mic';
 import Posts from 'src/containers/Posts';
import Nav from 'src/components/Nav';
import LoginForm from 'src/containers/LoginForm'; */

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
          <Route path="/moncompte" exact>
            <MyAccount />
            <Account2 />
            <Account3 />
          </Route>
        </>
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
