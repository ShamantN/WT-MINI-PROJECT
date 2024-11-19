import React from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './PopDest.css';

export class PopDest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoPath: props.videoPath
        };
        this.vidRef = React.createRef();
    }

    handleMouseEnter = () => {
        this.vidRef.current.play();
    }

    handleMouseLeave = () => {
        this.vidRef.current.pause();
    }

    render() {
        return (
            <div className="vidContainer" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <p className="vidContainerText">{this.props.text}</p>
                <video muted loop ref={this.vidRef}>
                    <source src={this.state.videoPath}></source>
                </video>
            </div>
        );
    }
}

export const BookingArea = () => {
    const [searchText, setSearchText] = React.useState("");
    const [showPopup, setShowPopup] = React.useState(false);
    const [searchResults, setSearchResults] = React.useState([]);
    const inputRef = React.useRef();
    const popupRef = React.useRef();
    const navigate = useNavigate(); // Using the useNavigate hook

    const handleInputChange = async (event) => {
        const text = event.target.value;
        setSearchText(text);
        setShowPopup(text.length > 0);

        if (text.length > 0) {
            try {
                const fetchDest = await fetch(`http://localhost:5000/api/search?q=${encodeURIComponent(text)}`);
                const fetchedData = await fetchDest.json();
                setSearchResults(fetchedData);
            } catch (err) {
                console.log(err);
            }
        } else {
            setSearchResults([]);
        }
    }

    const handleClickOutside = (event) => {
        if (inputRef.current && popupRef.current &&
            !inputRef.current.contains(event.target) && 
            !popupRef.current.contains(event.target)) {
            setSearchText("");
            setShowPopup(false);
            setSearchResults([]);
        }
    }

    const handleDestSelect = (name, country) => {
        navigate('/destination', { state: { name, country } }); // Use navigate to change routes
    }

    const handleBookNow = ()=>{
        navigate('/destination');
    }

    React.useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="slidesContainer">
            <input
                type="text"
                placeholder="Search for your destination"
                value={searchText}
                onChange={handleInputChange}
                ref={inputRef}
            />
            {showPopup && (
                <div className="popupSearchWindow" ref={popupRef}>
                    {searchResults.map((destination) => (
                        <button key={destination._id} onClick={() => handleDestSelect(destination.name, destination.country)}>
                            {destination.name}, {destination.country}
                        </button>
                    ))}
                </div>
            )}

            <h1>BOOKING FLIGHTS</h1>
            <p>Explore a world of unforgettable travel experiences, from exotic beaches to vibrant cityscapes,</p>
            <p>curated to suit every wanderlust-filled dream. Book your flight today and start your adventure with</p>
            <p>us, where every journey promises moments that last a lifetime.</p>

            <button className="button1" onClick={handleBookNow}>Book now</button>
        </div>
    );
}

export default PopDest


//example of how to use the passed name and country from the button clicked in the search box

/*

import React from 'react';
import { useLocation } from 'react-router-dom';

const Destination = () => {
    const location = useLocation();
    
    // Access the state passed through navigate
    const { name, country } = location.state || {}; // Use optional chaining to avoid errors if state is undefined

    return (
        <div>
            <h1>Destination Details</h1>
            {name && country ? (
                <div>
                    <h2>{name}</h2>
                    <p>Country: {country}</p>
                </div>
            ) : (
                <p>No destination selected.</p>
            )}
        </div>
    );
};

export default Destination;

*/