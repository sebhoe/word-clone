import React from "react";

function GuessInput({ handleSubmitGuess, gameOver }) {
  const [guess, setGuess] = React.useState("");

  function submitHandler(event) {
    event.preventDefault();

    if (guess.length !== 5) return;

    console.log({ guess });

    handleSubmitGuess(guess);

    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={submitHandler}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        disabled={gameOver}
        minLength={5}
        maxLength={5}
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
