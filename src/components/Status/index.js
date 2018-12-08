import React, {Component} from "react";
import "./Status.css";

// STATEFUL 

class Status extends Component {

    state = {
        message: ""
    }

    // function runs on every state change
    // prevProps = props are header components that is equal to state
    // you can access parents states
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
        newState.message = "win";
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
        case "win":
          return "You Won!";
        case "correct":
          return "Correctomundo!";
        case "incorrect":
          return "Incorrectomundo!";
        default:
          return "Only click an artist once. Good luck!";
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

export default Status;