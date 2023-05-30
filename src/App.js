import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CurrencyList from './components/Home/Home';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<CurrencyList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
