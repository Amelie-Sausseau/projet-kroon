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
import Categories from 'src/containers/Categories';
import Loader from 'src/components/Loader';
import Burger from 'src/containers/Burger';
import PostForm from 'src/containers/PostForm';
import HomeUsers from 'src/containers/HomeUsers';
import Publications from 'src/containers/Publications';
import PublicationUser from 'src/containers/PublicationUser';

// import MyAccount from 'src/containers/Account';
// import Account2 from 'src/components/account2';
// import Account3 from 'src/components/account3';
import MyEnhancedForm from 'src/components/Contact2';
import Compte from 'src/containers/Compte';
import kroonLogo from './kroon_vFinale.svg';

/* import Mic from 'src/containers/Mic';
 import Posts from 'src/containers/Posts';
import Nav from 'src/components/Nav';
import LoginForm from 'src/containers/LoginForm'; */

// == Composant
const App = ({loading, logged, fetchUserDataFromLocalStorage }) => {

useEffect(fetchUserDataFromLocalStorage ,[]);

  return (
    <div className="app">
      {loading && <Loader />}
      {!loading && !logged ? (
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
            <MyEnhancedForm />
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
          <Route  path="/publications/:slug" >
            <Publications  />
          </Route>
          <Route  path="/publicationsUser/:slug" >
            <PublicationUser  />
          </Route>
          <Route path="/" exact>
            <HomeUsers />
            <Footer />
          </Route>
           <Redirect from="/connexion" to="/" exact/>
           <Route path="/poster" exact>
            <PostForm />
          </Route>
          <Route path="/contact" exact>
            <MyEnhancedForm />
            <Footer />
          </Route>
          <Route path="/publications" exact>
            <Publications />
          </Route>
          <Route path="/moncompte" exact>
            <Compte />
          </Route>
        </>
      )}
    </div>
  );
};

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
};

// == Export
export default App;