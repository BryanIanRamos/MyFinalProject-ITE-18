import React, { useRef, useState } from "react";
import { userData } from './helper';
import Header from './header';
import './App.css';
import Axios from 'axios';
import { toast } from 'react-toastify';
import SliderImage from './Slider';
import Ads from './Ads';
import CakeBg from './images/Cake_BG.png';
import UserIcon from './images/UserIcon.png';
import Cake1 from './images/Group_8.png';
import Cake from './images/Imagecake.png';
import Cake3 from './images/Offer.png';
import ShopeSale from './eCommerce/ShopeSale';

const Content = () => {
  const { username, email } = userData();

  const [formData, setFormData] = useState({
    data:{
      Name: '',
      Comment: ''
    }
  });

  const section1 = useRef(null);
  const section2 = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    postData('/api/comments', formData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error("HANDLESUBMIT ERROR:",error);
      });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  async function postData(url = 'http://localhost:1337/api/comments', data = {}) {
    console.log(data);
    const response = await Axios.post("http://localhost:1337/api/comments", data);
    console.log(response);
    return response.data;
  }

  const scrollHandler = (elsRef) => {
    if (elsRef && elsRef.current) {
      window.scrollTo({ top: elsRef.current.offsetTop, behavior: 'smooth' });
    }
  };

  const handleClick = () => {
    setTimeout(() => {
      toast.success('Logged out successfully!', {
        hideProgressBar: true
      });
      localStorage.setItem("isLogged", false);
      window.location.href = '/';
    }, 1500);
  };

  const slides = [
    <img className='slideImage-size' src={Cake1} alt="Slide 1" />,
    <img className='slideImage-size' src={Cake} alt="Slide 2" />,
    <img className='slideImage-size' src={Cake3} alt="Slide 3" />
  ];

  return (
    <>
      <Header />
      <div className='nav-box-content'></div>

      <div className="login-side-content">
        <div className='login-side'>
          <div className="left-side-content">
            <img className='userIcon' src={UserIcon} alt='UserIcon' />
            <h3>{username}</h3>
            <div className="menu-side">
              <h2>MENU</h2>
              <div className="line"></div>
              <div className="menu-select">
                <img src={require('./images/CakeLogo.png')} alt="Cake Logo" />
                <a href="#" onClick={() => scrollHandler(section1)}
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'orange')}
                  onMouseLeave={(e) => (e.target.style.color = 'black')}
                >Birthday</a>
              </div>
              <div className="menu-select">
                <img src={require('./images/wpf_wedding-cake.png')} alt="Cake Logo" />
                <a href='#' onClick={() => scrollHandler(section2)}
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'orange')}
                  onMouseLeave={(e) => (e.target.style.color = 'black')}
                >Wedding</a>
              </div>
              <div className="line2"></div>
              <div>
                <button onClick={handleClick}>Log out</button>
              </div>
            </div>
          </div>

          <div className="main-side">
            <SliderImage slides={slides} autoplayInterval={3000} className='slider-store' />
            <ShopeSale />
          </div>

          <div className="right-side-content">
            <Ads />
          </div>
        </div>

        <div>
          <div className="footer">
            <img className="img-footer" src={require('./images/short_Desc_box.png')} alt="Footer" />
            <div className="info-footer">
              <div className="footer-container">
                <h3>VISIT US</h3>
                <div className="website-link">
                  <img src={require('./images/skill-icons_instagram.png')} alt="instagram" />
                  <a>papasCake@instagram.com</a>
                </div>
                <div className="website-link">
                  <img src={require('./images/logos_facebook.png')} alt="Facebook" />
                  <a>papasCake@facebook.com</a>
                </div>
                <div className="website-link">
                  <img src={require('./images/tiktok.png')} alt="tiktok" />
                  <a href={null} >papasCake@tiktok.com</a>
                </div>
              </div>
              <div className="footer-container">
                <h3>SEND US YOUR COMMENTS</h3>
                <form onSubmit={null}>
                  <textarea onChange={handleChange} defaultvalue={"text here!"}></textarea>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="invisible-point1" ref={section1}></div>
        <div className="invisible-point2" ref={section2}></div>
      </div>
    </>
  );
}

export default Content;
