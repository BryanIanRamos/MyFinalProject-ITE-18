import React from 'react';
import Line from '../components/images/Extra.png';
import Comment_box1 from '../components/images/Comment_Area1.png';
import Comment_box2 from '../components/images/Comment_Area2.png';
import Comment_box3 from '../components/images/Comment_Area3.png';
import Carousel from "react-elastic-carousel";
import '../components/style/client.css';


export default function Client(){
    return(
        <div className='client-page'>
            <div className='client-content'>
                <h2>Testimonial</h2>
                <h1>OUR CLIENTS SAY!!!</h1>

                <img src={Line}/>

                <Carousel className='carousel-client'>

                    <div className='clientBorder'>
                        <div className='sliderBox-client'>
                            <img src={Comment_box1}/>
                        </div>
                    </div>  

                    <div className='clientBorder'>
                        <div className='sliderBox-client'>
                            <img src={Comment_box2}/>
                        </div>
                    </div> 

                    <div className='clientBorder'>
                        <div className='sliderBox-client'>
                            <img src={Comment_box3}/>
                        </div>
                    </div> 
                
                </Carousel>
            </div>
            

        </div>
    )
}