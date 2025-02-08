import React from "react";
import Button from './Button';
import './App.css';

const Joke = () => {
    const [Joke, setJoke] = React.useState("");

    const renderJoke = () => {
        fetch("https://v2.jokeapi.dev/joke/Programming")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
    };

    return (
        <div>
            <p>{Joke}</p>
            <Button callApi={renderJoke} />           
        </div>
    );
}

export default Joke;