// == Import npm
import React, { useEffect, useState } from 'react';

// == Import
import './styles.css';
import Nav from 'src/components/Nav';
import LoginForm from 'src/components/LoginForm';
import Footer from 'src/components/Footer';
import Mic from 'src/containers/Mic';
import Posts from 'src/containers/Posts';


// == Composant
const App = ({manageLoad, loading}) => {
  useEffect(
    manageLoad,
    [],
  );
  
return(
  <div className="app">
{loading && <div>Application en cours de chargement</div>}
{!loading && (
  <>
<Posts />


</>
)}
  </div>
);
}
// == Export
export default App;

/* 
{loading && <div>Application en cours de chargement</div>}
{!loading && (
<Nav />
<Mic />
<LoginForm />
<Footer />
<Posts />
<h1>bonjour</h1>
 */
