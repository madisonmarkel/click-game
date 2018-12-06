import React, {Component} from "react";
import "./GameMessage.css";

class GameMessage extends Component {

    state = {
        message: ""
    }

    // function runs on every state change
    componentDidUpdate(prevProps) {

      // will be passed into setState function
      let newState = {}

      // deconstruct score and topScore from the previous state
      const {score, topScore} = prevProps

      // change message if user guess correclty or incorrectly
      if (score === 0 && topScore === 0) {
        newState.message = "";
      } else if (score !== 0 && topScore > 0) {
        newState.message = "correct";
      } else if (score === 12 && topScore === 12) {
        newState.message = "You won!";
      } else {
        newState.message = "incorrect";
      }

      // set the state with the new message if the score changes, 
      // or the message and state message are not equal
      if (score !== this.props.score || this.state.message !== newState.message) {
        this.setState(newState);
      }
  
    }

    // change the display message based on the message state
    renderMessage = () => {
        switch (this.state.message) {
        case "You won!":
          return "You Won!";
        case "correct":
          return "You guessed correctly!";
        case "incorrect":
          return "You guessed incorrectly!";
        default:
          return "Click a character to begin!";
        }
    };

    render() {
        return(
          <li 
            id={`${this.state.message}`}
          >
            {this.renderMessage()}
          </li>  
        );
    }
}

export default GameMessage;