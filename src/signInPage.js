import React from 'react';
import './signInPage.css';
import bgVideo from './images/bg_video.mp4';
import { useNavigate } from 'react-router-dom';

function RightSideLogin() {
    const navigate = useNavigate();



    return (
        <div className='body1'>
                <div id="root3_login" className="login_box1">
                    <h1>Travel Earth</h1>
                        <video autoPlay muted loop className='video_container1'>
                            <source src={bgVideo} type="video/mp4" />
                        </video>
                    <form>
                        <h1>Sign in</h1>
                        <input type="email" placeholder="Enter your registered E-mail ID" className="textField" required />
                        <hr />
                        <input type="password" placeholder="Enter your password" className="textField" required />
                        <div className="button_container">
                            <button className="button_style2" type="button" onClick={() => navigate('/')}>Go Back</button>
                            <button className="button_style2" type="button">Create a new account</button>
                        </div>
                    </form>
                </div>
        </div>
    );

}

export default RightSideLogin;
