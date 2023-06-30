import axios from 'axios';  // Import axios library to make API calls
import React, { useState } from 'react';  // Import React library
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook from the react-router-dom library
import { toast } from 'react-toastify';  // Import toast function from the react-toastify library
import {Col, FormGroup, Row} from 'reactstrap';  // Import Col, FormGroup, and Row components from the reactstrap library

const Registration = () => {
    const initialUser = { email: '', password: '', username: '' }  // Define the initial user object with empty values
    const [user, setUser] = useState(initialUser);  // Declare a state variable 'user' and set it to the initial user object
    
    // Define a signUp function that sends a POST request to the server to register a new user
    const signUp = async() =>{
        try {
            const url = 'http://localhost:1337/api/auth/local/register';  // Define the endpoint URL to make the API call
            if(user.username && user.email && user.password){  // Check if user object has a valid username, email, and password
                const res = await axios.post(url, user);  // Send the POST request with the user object to the server and wait for the response
                if(res){  // If the response is successful
                    setUser(initialUser);  // Reset the user object to the initial state
                    toast.success('Registered!', {  // Display a success toast notification
                        hideProgressBar: true,
                    });
                }

            }
        } catch (error) {  // If the API call fails
            toast.error('ERROR: Please ensure that your username does not include any numbers, and that your email address has not been previously registered.', {  // Display an error toast notification
                hideProgressBar: true,
            });
        }
    };

    // Define a handleUserChange function that updates the user object with the new values as the user inputs data
    const handleUserChange = ({target}) =>{
        const {name, value} = target;
        setUser((currentUser) => ({
            ...currentUser,
            [name]: value,
        }));
    };

    // Return the JSX code to be rendered to the screen
    return(
        <Row className='register'>
            <Col>
                <div>
                    <h2>Sign up</h2>
                    <br></br>
                    <FormGroup>
                        <p>Username: </p><input
                            type='text'
                            name='username'
                            value={user.username}
                            onChange={handleUserChange}
                            placeholder='Enter username'></input>
                    </FormGroup>

                    <FormGroup>
                        <p>Email: </p><input
                            type='email'
                            name='email'
                            value={user.email}
                            onChange={handleUserChange}
                            placeholder='Enter email'></input>
                    </FormGroup>

                    <FormGroup>
                        <p>Pasword: </p><input
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={handleUserChange}
                            placeholder='Enter password'></input>
                        <br></br>
                        <br></br>
                    </FormGroup>
                    <button color='primary' onClick={signUp}>Sign up</button>
                </div>
            </Col>
        </Row>
    )
}

// Export the Registration component so it can be used in other parts of the application
export default Registration;
