import React from "react";
import PopDest from './PopDestinations.js';
import './PopDest.css';
import { BookingArea } from "./PopDestinations.js";

import video1 from "../images/EIFFEL_TOWER_VIDEO.mp4";
import video2 from "../images/EIFFEL_TOWER_VIDEO.mp4";
import video3 from "../images/EIFFEL_TOWER_VIDEO.mp4";
import video4 from "../images/EIFFEL_TOWER_VIDEO.mp4";

const PopIndex = ()=>{
    return(
        <div className="bg">
            <BookingArea/>
            <div class="destContainer">
                <h1>Popular destinations</h1>
                <div class="firstRow">
                        <PopDest videoPath={video1}/>
                        <PopDest videoPath={video2}/>
                        <PopDest videoPath={video2}/>
                </div>

                <div class="secondRow">
                        <PopDest videoPath={video3}/>
                        <PopDest videoPath={video4}/>
                        <PopDest videoPath={video4}/>
                </div>

            </div>
        </div>
    )
}

export default PopIndex;