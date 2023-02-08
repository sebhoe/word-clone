import React from "react";

function Banner({ gameResult, answer }) {
  if (gameResult > 0) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {gameResult} guesses</strong>.
        </p>
      </div>
    );
  } else if (gameResult === 0) {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

export default Banner;
