import React, { useState } from "react";
import Button from "./Button";

const GuessControl = (props) => {
  const [currentGuess, setCurrentGuess] = useState("");
  const { onGuess } = props;

  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  };

  const onSubmitGuess = () => {
    onGuess(Number(currentGuess));
    setCurrentGuess("");
  };

  return (
    <div>
      <input type="number" value={currentGuess} onChange={handleInputChange} />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
};

export default GuessControl;
