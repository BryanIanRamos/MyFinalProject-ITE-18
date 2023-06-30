import React from 'react';
import './style/Nav.css';
import { Link, animateScroll as scroll } from 'react-scroll';

function Navbar({ section1, section2, section3, section4, section5, scrollHandler }) {
  const handleScroll = (elsRef) => {
    if (elsRef.current) {
      window.scrollTo({ top: elsRef.current.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <a href='#' onClick={() => scrollHandler(section1)}>Home</a>
        </li>
        <li>
          <a href='#' onClick={() => scrollHandler(section2)}>ABOUT US</a>
        </li>
        <li>
          <a href='#' onClick={() => scrollHandler(section3)}>MENU & PRICING</a>
        </li>
        <li>
          <a href='#' onClick={() => scrollHandler(section4)}>MASTER CHEFS</a>
        </li>
        <li>
          <a href='#' onClick={() => scrollHandler(section5)}>PAGES</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
