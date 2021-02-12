// == Import npm
import React from 'react';

// == Import
import './styles.css';
import Nav from 'src/components/Nav';
import LoginForm from 'src/components/LoginForm';
import Footer from 'src/components/Footer';
import Mic from 'src/containers/Mic'


// == Composant
const App = () => (
  <div className="app">
  <Nav />
  <Mic />
  <LoginForm />
  <Footer />
  </div>
);

// == Export
export default App;
