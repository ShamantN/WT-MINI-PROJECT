import React from "react";
import PopDest from './PopDestinations.js';
import './PopDest.css';
import {BookingArea} from "./PopDestinations.js";

import video1 from "../images/EIFFEL_TOWER_VIDEO.mp4";
import video2 from "../images/TAJ.mp4";
import video3 from "../images/COLOSSEUM.mp4";
import video4 from "../images/PYRAMID.mp4";
import video5 from "../images/kiyomizu.mp4";
import video6 from "../images/OPERA_HOUSE.mp4";



const PopIndex = ()=>{
    return(
        <div className="bg">
            <BookingArea/>
            <div class="destContainer">
                <h1>Popular destinations</h1>
                <div class="firstRow">
                        <PopDest videoPath={video1} text="The Eiffel Tower, Paris, France"/>
                        <PopDest videoPath={video2} text="The Taj Mahal, Agra, India"/>
                        <PopDest videoPath={video3} text="The Colosseum, Rome, Italy"/>
                </div>

                <div class="secondRow">
                        <PopDest videoPath={video4} text="The Great Pyramids of Giza, Egypt"/>
                        <PopDest videoPath={video5} text="The Kiyomizu-Dera, Kyoto, Japan"/>
                        <PopDest videoPath={video6} text="The Sydney Opera House, Sydney, Australia"/>
                </div>

            </div>
        </div>
    )
}

export default PopIndex;