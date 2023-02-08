import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const [gameResult, setGameResult] = React.useState(-1);

  function handleSubmitGuess(guess) {
    const nextGuesses = [...guessResults, guess];
    setGuessResults(nextGuesses);

    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      // alert("Sorry, you ran out of guesses!");
      setGameResult(0);
    } else if (guess === answer) {
      setGameResult(nextGuesses.length);
    }
  }

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer}></GuessResults>
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameOver={gameResult >= 0}
      ></GuessInput>

      <Banner gameResult={gameResult} answer={answer}></Banner>
    </>
  );
}

export default Game;
