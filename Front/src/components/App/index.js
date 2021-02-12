// == Import npm
import React from 'react';

// == Import
import './styles.css';
import Nav from 'src/components/Nav';
import LoginForm from 'src/components/LoginForm';
import Footer from 'src/components/Footer';

// == Composant
const App = () => (
  <div className="app">
  <Nav />
  <LoginForm />
  <Footer />
  </div>
);

// == Export
export default App;
