import React, { useState } from 'react';
import randomWord from "./Words";

import state0 from "./images/0.jpg";
import state1 from "./images/1.jpg";
import state2 from "./images/2.jpg";
import state3 from "./images/3.jpg";
import state4 from "./images/4.jpg";
import state5 from "./images/5.jpg";
import state6 from "./images/6.jpg";

function Hangman() {

  //default props that contains max number of guesses and images
  const defaultProps = {
    maxWrong: 6,
    images: [state0, state1, state2, state3, state4, state5, state6]
  };

  //state variables
  const [mistakes, setMistakes] = useState(0);
  const [guessed, setGuessed] = useState(new Set([]));
  const [answer, setAnswer] = useState(randomWord());

  //game is over once mistakes equals the number of max wrong guesses
  const gameOver = mistakes >= defaultProps.maxWrong;
  const isWinner = guessedWord().join("") === answer;

  //displays the word and underscores that the user is trying to guess
  function guessedWord() {
    //goes through each letter, if the user guessed it, the letter is displayed, if not then an underscore is showed
    return answer.split("").map(letter => guessed.has(letter) ? letter : " _ ")
  }

  //function run when button is clicked
  function handleGuess(e) {
    let letter = e.target.value;
    //adds the letter clicked to the array of letters that were already guessed
    setGuessed(guessed.add(letter));
    //if a guess is correct, 0 is added to the mistakes 
    setMistakes(mistakes + (answer.includes(letter) ? 0 : 1));
    guessedWord();
  }

  //function to make all the buttons for the letters
  function generateButtons() {
    //takes all the letters and splits them into buttons
    return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
      <button key={letter} value={letter} onClick={handleGuess} disabled={guessed.has(letter)} >
        {letter}
      </button>
    ))
  }

  // function showGuessed() {
  //   return guessed.map((letter) => (
  //     letter
  //   )) 
  // }

  //resets the game
  function reset() {
    setMistakes(0);
    setGuessed(new Set([]));
    setAnswer(randomWord());
  }

  //variable used to display buttons
  let gameStat = generateButtons();
  if (isWinner) {
    gameStat = "You Won!";
  }

  if (gameOver) {
    gameStat = "You Lost.";
  }

  return (
    <div className="container">
      <div className="wrong">
        <p>{defaultProps.maxWrong - mistakes} tries left!</p>
        <p>Letters guessed: {guessed}</p>
        {/* <p>Letters guessed: {showGuessed}</p> */}
      </div>

      <div className="image">
        <img src={defaultProps.images[`${mistakes}`]}></img>
      </div>

      <div className="text">
        <h4>Guess the Food</h4>
        <p>{!gameOver ? guessedWord() : answer}</p>
      </div>

      <div className="buttons">
        {gameStat}
      </div>
      
      <button className="reset" onClick={reset}>Reset</button>
    </div>
  )
}

export default Hangman;