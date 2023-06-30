import React from 'react';
import rightHeader from './images/phone_logo.png';
import leftHeader from './images/email.png';

//Just a Header display on the web...zzZZZ

const HeaderBar = () => {
    return(
        <div className='navHead'>
            <div className='white_box'>
                <p className='mail'>EMAIL US</p>
                <img className='email_logo' src={leftHeader}  height={48} width={48}/>
                <p className='email'>Papasbakeria@gmail.com</p>
            </div>

            <div className='box'>
                <div className='outline'>
                <h4>CAKE AREA</h4>
                </div>
                
            </div>

            <div className='white_box'>
                <img className='headerLogo' src={rightHeader} height={48} width={48}/>
                <p className='call'>CALL US</p>
                <p className='num'>+639094684013</p>
            </div>
        </div>
    )
}


export default HeaderBar;