import React from 'react';
import Line from '../components/images/Extra.png';
import '../components/style/baker.css';
import baker1 from '../components/images/chef1.png';
import baker2 from '../components/images/chef2.png';
import baker3 from '../components/images/chef3.png';
import base from '../components/images/cakebase.png';


export default function Baker(){
    return(
        <div className='bakers-page'>
            <div className='parent-baker-container'>
                <div className='baker-container'>
                    <h1 className='bakers-'>THE BAKERS</h1>
                    <h1>OUR MASTER CHEFS</h1>
                    <img src={Line}/>
                </div>
            </div>

            <div className='chefs-container'>
                <img src={baker1}/>
                <img src={baker2}/>
                <img src={baker3}/>
            </div>
            
            <div className='baseCake-container-C'>
                <img  className='cakeBase' src={base}/>
                <div className='text-content-cb'>
                    <h2>Special Kombo Pack</h2>
                    <h1>SUPER CHERRY CAKE</h1>
                    <img src={Line}/>
                    <p>Try our limited time special offer: the Cherry Forest Cake! Layers of cherry-infused sponge cake and cherry compote, covered in a chocolate ganache frosting and topped with fresh cherries. Don't miss out on this irresistible dessert!</p>
                </div>    
            </div>
        </div>
    )
}