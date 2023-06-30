
import React from 'react';
import './style/slideShop.css';
import './style/carouselCake.css';
import Carousel from "react-elastic-carousel";
import Cake1 from "../components/images/Chocolate_Meringue_Layer_Cake.png";
import Cake2 from "../components/images/Rich_Chocolate.png";
import Cake3 from "../components/images/Neapolitan_Brownie_Ice_Cream_Cake.png";
import Cake4 from "../components/images/Choco_Berry_Surprise_Cake.png";
import Cake5 from "../components/images/Coconut_Cake.png";
import Cake6 from "../components/images/Snake_Cake.png";


export default function SlideShop(){

    return(

        <Carousel className='carousel'>
            <div className='caroBorderSize'>
                <div className='sliderBox-cake'>
                        <img src={Cake1}/>
                        <img src={Cake2}/>
                        <img src={Cake3}/>
                </div>

                <div className='sliderBox-cake'>
                        <img src={Cake4}/>
                        <img src={Cake5}/>
                        <img src={Cake6}/>
                </div>
            </div>
            <div className='caroBorderSize'>
                <div className='sliderBox-cake'>
                        <img src={Cake1}/>
                        <img src={Cake2}/>
                        <img src={Cake3}/>
                </div>

                <div className='sliderBox-cake'>
                        <img src={Cake4}/>
                        <img src={Cake5}/>
                        <img src={Cake6}/>
                </div>
            </div>

           
            
        </Carousel>
    )
}