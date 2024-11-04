import React from "react";
import './PopDest.css'

class PopDest extends React.Component{
    constructor(props){
        super(props);
        this.state={videoPath:props.videoPath}
    }
    render(){   
        return(
            <div className="vidContainer">
                <video autoPlay muted loop>
                    <source src={this.state.videoPath}></source>
                </video>
            </div>
        );
    }
}

export function BookingArea(){
    return(
        <div className="slidesContainer">
            <button className="button1" type="submit">Book now</button>
        </div>
    );
}

export default PopDest;
