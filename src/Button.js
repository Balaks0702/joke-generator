import React from "react";
import './App.css';

const Button = (props) => {
    return (
        <button onClick={props.callApi}>
            Tell me a new joke
        </button>
    );
}

export default Button;