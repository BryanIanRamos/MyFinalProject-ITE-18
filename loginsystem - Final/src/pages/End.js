import React from 'react';
import descriBox from '../components/images/short_Description_box.png';
import descBG from '../components/images/Rectangle_37.png';
import location from '../components/images/location-on.png';
import email from '../components/images/ic_outline-email.png';
import phone from '../components/images/phone-enabled.png';
import base from '../components/images/Rectangle_endd.png';
import '../components/style/end.css';


export default function End(){
    return(
        <div className='end-page'>
            <div className='end-container'>
                <img className='descriBox' src={descriBox}/>
                
                <div className='desc-container-end'>
                    
                    <div className='group-end'>
                        <h1>GET IN TOUCH</h1>
                        <div>
                        <img src={location}/>
                            <p>123 Street, Unahan gamay, tas pahilid.</p>
                        </div>
                        
                        <div>
                            <img src={email}/>
                            <a href=''>Papasbakeria@gmail.com</a>
                        </div>

                        <div>
                            <img src={phone}/>
                            <p>+639094684013</p>
                        </div>
                    </div>

                    <div className='group-end'>
                        <h1>NEWEST LETTER</h1>
                        
                        <div>
                            <p>Send us some letter.</p>
                        </div>
                        <div>
                            <input type="text" defaultValue='example@gmail.com'></input>
                        </div>

                    </div>
                </div>
                <img className='descBGs' src={descBG}/> 
            </div>
            

            {/* <div className='base-box-end_'>
                        <h3>ⓒBryanProject. All Right Reserved. Created By Bryan Ramos</h3>
                        <img src={base}/>
            </div> */}

           
        
        </div>
    )
}