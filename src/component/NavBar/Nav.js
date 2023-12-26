import React from 'react';
import './Nav.css';
import { useTranslation } from 'react-i18next';
import logo from '../media/logo.png';
import { FaGlobeAmericas } from 'react-icons/fa';

const Nav = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="nav"> 

      <div className="nav_contents">
        <div>
          <img className="nav_logo" src={logo} alt="logo" />
        </div>

        <div className="language">
          <span>
            <FaGlobeAmericas />
          </span>
          <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="du">Dutch</option>
          </select>
        </div>

      </div>

    </div>
  );
};

export default Nav;
