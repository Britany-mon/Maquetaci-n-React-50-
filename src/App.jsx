import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="app-wrapper">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
