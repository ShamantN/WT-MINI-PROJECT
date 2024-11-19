import React, { useState } from 'react';
import './signInPage.css';
import bgVideo from './images/bg_video.mp4';
import { useNavigate } from 'react-router-dom';

function RightSideLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle account creation
    const handleCreateAccount = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                alert('Account created successfully!');
                navigate('/');
            } else {
                const data = await response.json();
                alert(data.message || 'Failed to create account. Try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error creating account.');
        }
    };

    return (
        <div className='body1'>
            <div id="root3_login" className="login_box1">
                <h1>Travel Earth</h1>
                <video autoPlay muted loop className='video_container1'>
                    <source src={bgVideo} type="video/mp4" />
                </video>
                <form onSubmit={handleCreateAccount}>
                    <h1>Sign Up</h1>
                    <input 
                        type="email" 
                        placeholder="Enter your E-mail ID" 
                        className="textField" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                    <hr />
                    <input 
                        type="password" 
                        placeholder="Enter your password" 
                        className="textField" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                    <div className="button_container">
                        <button className="button_style2" type="button" onClick={() => navigate('/')}>Go Back</button>
                        <button className="button_style2" type="submit">Create Account</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RightSideLogin;
