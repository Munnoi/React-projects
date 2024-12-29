import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: +newValue,
      };
    });
  }

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {inputIsValid ? (
        <Results input={userInput} />
      ) : (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </>
  );
}

export default App;