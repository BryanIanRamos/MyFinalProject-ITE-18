import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/header';
import Body from '../components/body';
import AboutPage from './About';
import MenuPricing from './Menu';
import Baker from './Baker';
import Client from './Client';
import EndDesc from './End';
import { ToastContainer } from 'react-toastify';

function LogIn() {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);

  const scrollHandler = (elsRef) => {
    if (elsRef && elsRef.current) {
      window.scrollTo({ top: elsRef.current.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="Home">
      <Header />
      <Navbar
        section1={section1}
        section2={section2}
        section3={section3}
        section4={section4}
        section5={section5}
        scrollHandler={scrollHandler}
      />
      <Body />
      <ToastContainer />
      <div ref={section1}>
        <AboutPage />
      </div>

      <div ref={section2}>
        <MenuPricing />
      </div>

      <div ref={section3}>
        <Baker />
      </div>

      <div ref={section4}>
        <Client />
      </div>

      <div ref={section5}>
        <EndDesc />
      </div>

    </div>
  );
}

export default LogIn;
