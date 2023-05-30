import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CiSettings } from 'react-icons/ci';
import { IoChevronBackSharp } from 'react-icons/io5';
import logo from './Nebulacoinnect.png';
import './NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navBar">
      <div
        className="nav-side arrow"
        aria-hidden="true"
        onClick={() => navigate('/')}
      >
        <IoChevronBackSharp className="icon" />
      </div>
      <div className="imgCont">
        <Link to="/">
          <img className="logo" src={logo} alt="NebulaCoinnect Logo" />
        </Link>
      </div>
      <div className="nav-side">
        <CiSettings className="icon settings" />
      </div>
    </nav>
  );
};

export default NavBar;
