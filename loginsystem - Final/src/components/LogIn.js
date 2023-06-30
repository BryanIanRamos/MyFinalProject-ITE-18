import React from 'react';
import {useState, useEffect} from 'react';
import Popup from './UIPop/popupClose'; 
import RPopup from './UIPop/regPopClose';
import axios from 'axios'; 
import {toast} from 'react-toastify'; //importing toast for displaying notifications
import Register from './Signup';
import { storeUser } from './helper';
import './style/body.css';

const initialUser = {password: "", identifier: ""};

const LogIn = () => {
  const[buttonPopup, setButtonPopup] = useState(false);
  const[registerPopup, setRegisterPopup] = useState(false);
 

  const [user, setUser] = useState(initialUser);

  const handleChange = ({target}) => {
    const {name, value} = target;
    setUser((currentUSer) => ({
      ...currentUSer,
      [target.name]:target.value,
    }))
  };

  const handleLogin = async() => {
    const url = 'http://localhost:1337/api/auth/local';//API endpoint for local authentication
    try {
      if(user.identifier && user.password){//checking if user credentials are entered
        const res = await axios.post(url, user);//making HTTP POST request to the API
        const {data} = await axios.post(url, user);
        if(data.jwt){//if JWT token is generated
          storeUser(data);//storing user data in local storage
          toast.success('Log in Successful!', {//displaying success notification
            hideProgressBar: true,
        });
        }
        console.log({res});
        setTimeout(() => {//setting timeout to navigate to home page after successful login
          localStorage.setItem("isLogged", true);
          window.location.href = '/home';
        }, 1500);
      }
    } catch (error) { //catching error if invalid credentials are entered
      toast.error('Invalid email or password.',{
        hideProgressBar: true,
      });   
    }
  }

  const handleRegister = async() => {
  }
 
  useEffect(() => {
    setTimeout(() => {
    }, 3000); //setting a timeout for useEffect hook
  }, []);

    return(
        <div className='Login-popup'>
            <main>
              <button className='Login-btn' onClick={() => setButtonPopup(true)}>log in</button>
            </main>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <div className='Log-in-display'>
                <br></br>
                <br></br>
                <h2 className='header'>Log in</h2>
                <br></br>
                <p>Email: </p><input
                  type='email'
                  name='identifier'
                  value={user.identifier}
                  onChange={handleChange}
                  placeholder='Enter your email'></input>
                <p>Pasword: </p><input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder='Enter your password'></input>
                <br></br>
                <br></br>
                {/* button to initiate login process */}
                <button onClick={handleLogin}>Login</button>

                <br></br>
                <br></br>

                {/* button to create account */}
                <h6>
                  Dont have an account? <a className='click-here' href='#' onClick={() => {
                    setRegisterPopup(true);
                    setButtonPopup(false);
                    }}>Click here</a> to create one.
                </h6>
                <br></br>
                <br></br>
      
              </div>

              {/* UI popup for registration */}
            </Popup>

            <RPopup trigger={registerPopup} setTrigger={setRegisterPopup}>
              <div className='signup-inner'>
               <Register/> 
              </div>
            </RPopup>
            

        </div>
    )
}






export default LogIn;

