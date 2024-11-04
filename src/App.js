import React from 'react';
import './index.css';
import bgVid from './images/bg_video.mp4';
import './mainPagePart.js';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import RightSideLogin from './signInPage.js';
import PopIndex from './components/PopIndex'; // Import your video display component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sign-in" element={<RightSideLogin />} />
        <Route path="/videos" element={<PopIndex />} />
      </Routes>
    </Router>
  );
};

const MainPage = () => {
  const navigate = useNavigate();

  const handleCreateAccountClick = () => {
    navigate('/sign-in');
  };

  const handleSignInClick = (event) => {
    event.preventDefault(); // Prevent default form submission
    // Here, add any sign-in logic if required
    // If successful, navigate to the videos page
    navigate('/videos');
  };

  return (
    <div className="container">
      <div className="left-container">
        <div id="root1_img" className="img_box">
          <div id="root_slide" className="slideShowContainer">
          </div>
        </div>
        <div id="root2_perks" className="perks_box">
          <h1>Discover Your Next Adventure With TravelEarth</h1>
          <p>Every journey tells a story. Let us help you write yours with curated travel experiences tailored just for you.</p>
        </div>
      </div>
      <div id="root3_login" className="login_box">
        <h1>Travel Earth</h1>
        <video autoPlay muted loop className="video_bg">
          <source src={bgVid} type="video/mp4" />
        </video>
        <form onSubmit={handleSignInClick}>
          <h1 style={{ paddingRight: '600px', fontSize: '70px', fontFamily: 'cool_font' }}>Sign in</h1>
          <input type="email" placeholder="Enter your registered E-mail ID" className="textField" required />
          <hr />
          <input type="password" placeholder="Enter your password" className="textField" required />
          <div className="button_container">
            <button className="button_style1" type="submit">Sign in</button>
            <button 
              type="button" 
              className="button_style2" 
              onClick={handleCreateAccountClick}
            >
              Create a new account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
