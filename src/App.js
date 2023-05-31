import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CurrencyList from './components/Home/Home';
import Details from './components/Details/Details';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<CurrencyList />} />
          <Route path="/details" element={<Details />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
