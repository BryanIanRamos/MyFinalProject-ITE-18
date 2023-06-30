import React from 'react';
import './About.css';
import Line from '../components/images/Extra.png';
import Cake from '../components/images/Imagecake.png';
import Heart from '../components/images/Heart.png';
import Reward from '../components/images/Reward.png';
import Base from '../components/images/Buttom_rate.png';
import Star from '../components/images/Star.png';



function About (){
    return(
        <div className='about-content'>
            <h2 className='about-C'>About Us</h2>
            <h1 className='welcome-C'>Welcome To Papa’s Bakeshop</h1>

            <img className='Line-C' src={Line}/>

            <img className='Cake-C' src={Cake}/>

            <h1 className='title-C'>Indulge in the Ultimate Chocolate Experience: </h1>
            <h1 className='title-C'>Try Our Signature Cake Today!</h1> 
            <p className='discreption-C'>At our bakery, we understand the importance of performance,<br/>
                which is why we take pride in our signature chocolate cake.<br/>
                Our skilled bakers use only the finest ingredients to create a <br/>
                cake that not only looks impressive, but performs exceptionally.<br/>
                With its moist layers, rich chocolate ganache, and velvety <br/>
                buttercream frosting, our cake is sure to be the star of any <br/>
                event.</p>


            <div className='short-discription'>
                <img className='image-C' src={Heart}/>
                    <div className='box-Dis-C'>

                    <h3>100% HEALTHY</h3>
                        <p>Our award-winning chocolate</p>
                        <p>cake is crafted with the highest</p>
                        <p>quality, safety-checked ingredients,</p>
                        <p>giving you the confidence to </p>
                        <p>indulge in every decadent bite.</p>
                    </div>
                    
                    <img className='image-C' src={Reward}/>
                    
                    <div className='box-Dis-C'>
                        <h3>AWARD WINNING</h3>
                        <p>Discover the award-winning</p>
                        <p>excellence of our chocolate cake, </p>
                        <p>celebrated for its rich layers of </p>
                        <p>ganache, moist cake, and </p>
                        <p>buttercream frosting that have</p>
                        <p>earned it recognition as a top</p>
                        <p>contender in the world of desserts.</p>
                    </div>
            </div>

            <img className='base-C' src={Base}/>

            <div className='rate-dis-C'>
                <div>
                    <img className='startRate-C' src={Star}/>
                    <h3 className='title-r-C'>OUR EXPERIENCE</h3>
                    <h3 className='rate-r-C'>42345</h3>
                </div>
               
                <div>
                    <img className='cakeRate-C' src={Star}/>
                    <h3 className='title-r-C'>CAKE SPECIALIST</h3>
                    <h3 className='rate-r-C'>32131</h3>
                </div>
                
                <div>
                    <img className='projectRate-C' src={Star}/>
                    <h3 className='title-r-C'>COMPLETE PROJECT</h3>
                    <h3 className='rate-r-C'>44123</h3>
                </div>
                
                <div>
                    <img className='clientsRate-C' src={Star}/>
                    <h3 className='title-r-C'>HAPPY CLIENTS</h3>
                    <h3 className='rate-r-C'>38021</h3>
                </div>
                
            </div>


        </div>
    );
}


export default About;