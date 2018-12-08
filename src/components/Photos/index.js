import React from "react";
import "./Photos.css";

// STATELESS

// defines what to do/how to format with data.json in the game.js component
// props.image becomes item.image in game.js because we define the new array as item in game.js
const Photos = props => (
    <div
        role="img"
        aria-label="click item"
        className={`gameCard`} 
        style={{ backgroundImage: `url("/click-game/${props.image}")`}}
        onClick={() => props.handleClick(props.id)}
    /> 
);

export default Photos;