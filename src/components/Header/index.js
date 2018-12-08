import React from "react";
import "./Header.css";
import Status from "../Status";

const Header = props => (
    <div className="header">
        <ul>
            <li><h2>Artist Clicks</h2></li>
            {/* Passing in score as a prop that is defined in STATUS COMPONENT */}
            <Status score={props.score} topScore={props.topScore} />
            <li id="score">Score: {props.score} | Top Score: {props.topScore}</li>
        </ul>
        
    </div>
)

export default Header;