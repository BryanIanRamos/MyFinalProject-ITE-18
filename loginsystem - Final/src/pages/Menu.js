import react from 'react';
import './Menu.css';
import Line from '../components/images/Extra.png';
import SlideContent from '../components/SlideShop';
import Navbar from '../components/images/Nav_menu.png';
import box1 from '../components/images/About_box1.png';
import box2 from '../components/images/About_box2.png';
import box3 from '../components/images/About_box3.png';
import base from '../components/images/Rectangle_30.png';


function MenuPricing(){
    return(
        <div className='menuPricing-main'>

            <div className='menuP-C'>
                <div className='contentTitle-mp'>
                    <h2 className='title-mp-C'>MENU AND PRICING</h2>
                    <h2 className='titleDisc-mp-C'>EXPLORE OUR CAKES</h2>
                    <img src={Line}/>
                </div>
            </div>

            {/* <div className='nav_menu'>
                <img src={Navbar} alt="Navbar"></img>
            </div> */}
            
            <div className='boxx'>
                <SlideContent/>
            </div>

            {/* <div className='base-disc-About'> */}
                <div className='shortDisc-about'>
                    <div className='set-box'>
                        <img src={box1}/>
                        <p className='moreAbout'>READ MORE</p>
                    </div>

                    <div className='set-box'>
                        <img src={box2}/>
                        <p className='moreAbout'>READ MORE</p>
                    </div>

                    <div className='set-box'>
                        <img src={box3}/>
                        <p className='moreAbout' href='#'>READ MORE</p>
                    </div>
                    
                </div>

                <div className='end-disc-about-0'>

                    <h1 className='discount'>30% DISCOUNT FOR THIS SUMMER</h1>
                    <div className='outer-box-m'>
                        <div className='inner-box-m'>
                            <h1>Order Now</h1>
                        </div>
                    </div>

                    <img className='base-about-menu' src={base}/>
                </div>
            {/* </div> */}


            
        </div>
        

    );
}


export default MenuPricing;