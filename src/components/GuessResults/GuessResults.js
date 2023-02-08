import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";
import { checkGuess } from "../../game-helpers";

function GuessResults({ guessResults, answer }) {
  const numOfGuessesLeft = NUM_OF_GUESSES_ALLOWED - guessResults.length;
  const emptyGuess = ["", "", "", "", ""];

  return (
    <div className="guess-results">
      {guessResults.map((guess, index) => {
        const checkedGuess = checkGuess(guess, answer);
        return <Guess key={index} guess={checkedGuess}></Guess>;
      })}
      {range(numOfGuessesLeft).map((index) => (
        <Guess key={index} guess={emptyGuess}></Guess>
      ))}
    </div>
  );
}

export default GuessResults;
