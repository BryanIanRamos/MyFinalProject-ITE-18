import React from 'react';
import './style/body.css';
import CakeBg from './images/Cake_BG.png';
import Pop_up from './LogIn';
import './style/ads.css';

//Display the whole content of the page...


const Body = () => {
  
   return(
   <div className='Body'>
      <img className='cakeBG' src={CakeBg}/>
      <div className='bg'>
      </div>
      <p className='tittle_1'>Flourish Cake</p>
      <p className='tittle_2'>Papa’s Bakeshop</p>
      <p className='tittle_des'>Best Sell in the Phillipines</p>
      <div className='button'>
         <p className='buy_button'>BUY NOW</p>
      </div>

      <Pop_up/>
    
   </div>    
   )
}




export default Body;